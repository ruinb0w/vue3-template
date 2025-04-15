import { ref } from "vue";

export function useCount() {
  const count = ref(0);

  function increase() {
    count.value++;
  }

  return { count, increase }
}
