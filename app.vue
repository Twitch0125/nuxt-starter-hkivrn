<template>
  <Head>
    <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>
  <div class="container mx-auto bg-gray-50 h-full p-12">
    <h1 class="text-xl font-medium mb-8">Deactivate Account</h1>
    <button
      class="px-4 py-3 bg-sky-700 text-white rounded font-bold text-lg"
      @click="show"
    >
      confirm
    </button>
    <ConfirmDialog />
    <div>confirmed? {{ result ? 'Yep!' : 'Nope' }}</div>
  </div>
</template>

<script lang="ts" setup>
const { show: showDialog } = useDialog();
const result = ref(null);
const show = async () => {
  console.log('showing');
  result.value = await showDialog();
};
</script>
