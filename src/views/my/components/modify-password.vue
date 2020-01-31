<template>
  <div class="tmk-modify-password">
    <div class="form-description">
      <div class="description__info">
        {{ $t("user.description") }}
      </div>
      <div class="description__tips">
        {{ $t("user.descriptionTips") }}
      </div>
    </div>
    <div class="form-content">
      <form action="">
        <div class="form-item">
          <span class="form-item__label">{{ $t("user.oldPassword") }}</span>
          <t-input
            class="form-item__value"
            v-model="oldPassword"
            type="center"
            nativeType="password"
          ></t-input>
        </div>
        <div class="form-item">
          <span class="form-item__label">{{ $t("user.newPassword") }}</span>
          <t-input
            class="form-item__value"
            v-model="newPassword"
            type="center"
            nativeType="password"
          ></t-input>
        </div>
        <div class="form-item">
              <span class="form-item__label">{{
                $t("user.reNewPassword")
              }}</span>
          <t-input
            class="form-item__value"
            v-model="reNewPassword"
            type="center"
            nativeType="password"
          ></t-input>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modify-password',
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      reNewPassword: ''
    }
  }
}
</script>

<style lang="scss">
  @include b(modify-password) {
    .form-description {
      .description__info {
        @include text(32);
      }
      .description__tips {
        @include text(32, $C35);
        margin-top: unit(20);
      }
    }
    .form-content {
      margin-top: unit(54);
      .form-item {
        display: flex;
        margin-bottom: unit(50);
        .form-item__label {
          @include text(29, $C35);
          margin-right: unit(20);
          width: unit(80);
          line-height: unit(46);
        }
        .form-item__value {
          width: unit(460);
        }
      }
    }
  }
</style>
