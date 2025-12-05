import { ref, onMounted, onUnmounted } from 'vue';

export function usePartnerCode() {
  const partnerCode = ref<string | null>(null);

  function handleMessage(event: MessageEvent) {
    if (event.data && event.data.partnerCode) {
      partnerCode.value = event.data.partnerCode;
    }
  }

  onMounted(() => {
    window.addEventListener('message', handleMessage);
    window.parent.postMessage({ type: 'widgetReady' }, '*');
  });

  onUnmounted(() => {
    window.removeEventListener('message', handleMessage);
  });

  return { partnerCode };
}
