import type { DirectiveBinding } from 'vue'
import { validateObject } from './functions'

// Left right layout

export function LrLayout(el: Element, binding: DirectiveBinding) {
  Array.from(el.children as HTMLCollectionOf<HTMLElement>).forEach((child, index) => {
    if (getComputedStyle(child)['display'] == 'flex' && child.children.length == 2) {
      const childrensChildren = child.children as HTMLCollectionOf<HTMLElement>
      if (index % 2 == 0) {
        child.style.alignSelf = 'flex-start'
        childrensChildren[0].style.order = '1'
      } else {
        child.style.alignSelf = 'flex-end'
        childrensChildren[child.children.length - 1].style.order = '1'
      }
      if (
        validateObject(binding.value) &&
        'distances' in binding.value &&
        binding.value['distances'].length > index
      ) {
        child.style.marginTop = binding.value['distances'][index] + 'px'
      }
    }
  })
}
