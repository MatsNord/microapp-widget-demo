import { ref, onMounted, onUnmounted } from 'vue';

const allowedOrigin = 'https://boende.bolaget.se'

export function usePartnerCode() {
  const partnerCode = ref<string | null>(null);

  function handleMessage(event: MessageEvent) {
    if (event.origin !== allowedOrigin) {
      return
    }

    if (event.data && event.data.partnerCode) {
      partnerCode.value = event.data.partnerCode;
    }
  }

  onMounted(() => {
    window.addEventListener('message', handleMessage);
    partnerCode.value = '42'; // For testing purposes
    window.parent.postMessage({ type: 'widgetReady' }, allowedOrigin); 
  });

  onUnmounted(() => {
    window.removeEventListener('message', handleMessage);
  });

  return { partnerCode };
}
