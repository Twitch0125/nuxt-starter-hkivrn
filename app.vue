<template>
  <Head>
    <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>
  <div class="bg-gray-50 container h-full p-12 mx-auto">
    <h1 class="mb-8 text-xl font-medium">Deactivate Account</h1>
    <button
      class="bg-sky-700 px-4 py-3 text-lg font-bold text-white rounded"
      @click="show"
    >
      confirm
    </button>
    <ConfirmDialog />
    <div>
      {{ resultMsg }}
    </div>
    <Notification
      msg="Account Deactivated"
      subtext="your account is no longer accessible"
      :show="showNotification"
      @close="setNotification(false)"
    />
  </div>
</template>

<script lang="ts" setup>
const { show: showDialog } = useDialog();
const result = ref(null);
const resultMsg = computed(() => {
  if (result.value === null) {
    return "";
  } else {
    return result.value ? "Confirmed!" : "Declined";
  }
});

const [showNotification, setNotification] = useToggle(false);

const show = async () => {
  result.value = await showDialog();

  if (result.value === true) {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  }
};
</script>
