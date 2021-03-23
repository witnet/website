<template>
  <SectionLayout class="announcement-section">
    <div class="wrapper">
      <div class="announcement-content">
        <p class="tag">{{ $t('announcement.tag') }}</p>
        <h4 class="subtitle">{{ $t('announcement.subtitle') }}</h4>
      </div>
      <Button color="plain" :font-size="16">
        {{ $t('announcement.button') }}
      </Button>
    </div>
  </SectionLayout>
</template>

<style scoped lang="scss">
.announcement-section {
  background: $grey-0;
  display: flex;
  justify-content: center;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    width: 1280px;
    .announcement-content {
      width: fit-content;
      .tag {
        color: $grey-2;
        font-weight: bold;
      }
    }
  }
}
@media (max-width: 1200px) {
  .announcement-section {
    padding: 24px 40px;
    height: max-content;
    .announcement-content {
      margin-bottom: 16px;
    }
  }
  .button {
    width: 300px;
    white-space: unset;
  }
}
</style>
