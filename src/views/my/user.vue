<template>
  <div class="tmk-user">
    <div class="tmk-user__switch-tab">
      <div class="tmk-user__switch-tab--modify">
        {{ $t("user.modifyTab") }}
      </div>
      <div class="tmk-user__switch-tab--password">
        {{ $t("user.passwordTab") }}
      </div>
    </div>
    <div class="tmk-user__line"></div>
    <div class="tmk-user__content">
      <div class="tmk-user__content--modify">
        <div class="avatar-content">
          <img class="avatar-image" :src="require('@assets/logo.png')" />
          <div class="avatar-edit">
            <t-icon name="edit" :size="14"></t-icon>
          </div>
        </div>
        <div class="form-content">
          <form action="">
            <div class="form-item">
              <span class="form-item__label">{{ $t("user.username") }}</span>
              <t-input
                class="form-item__value"
                v-model="loginId"
                type="center"
              ></t-input>
            </div>
            <div class="form-item">
              <span class="form-item__label">{{ $t("user.ageLevel") }}</span>
              <t-select
                class="form-item__value"
                :options="ageLevels"
                type="center"
              ></t-select>
            </div>
          </form>
        </div>
      </div>
      <div class="tmk-user__content--password">
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
                v-model="loginId"
                type="center"
                nativeType="password"
              ></t-input>
            </div>
            <div class="form-item">
              <span class="form-item__label">{{ $t("user.newPassword") }}</span>
              <t-input
                class="form-item__value"
                v-model="loginId"
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
                v-model="loginId"
                type="center"
                nativeType="password"
              ></t-input>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      loginId: '',
      ageLevels: [
        {
          text: 'PG-18',
          value: 1
        },
        {
          text: '央视频道',
          value: 1
        },
        {
          text: '地方卫视',
          value: 1
        },
        {
          text: '海外频道',
          value: 1
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@include b(user) {
  @include e(switch-tab) {
    @include text(14, $C35);
    display: flex;
    @include m(modify) {
      margin-right: unit(60);
    }
  }
  @include e(line) {
    border-bottom: unit(1) solid $C35;
    width: 100%;
    margin-top: unit(20);
  }
  @include e(content) {
    margin-top: unit(30);
    display: flex;
    flex-direction: column;
    align-items: center;
    @include m(modify) {
      .avatar-content {
        height: unit(130);
        width: unit(130);
        overflow: hidden;
        border-radius: 50%;
        position: relative;
        margin: 0 auto;
        .avatar-image {
          width: 100%;
          height: 100%;
        }
        .avatar-edit {
          height: unit(30);
          width: 100%;
          position: absolute;
          z-index: 1;
          background-color: $C08;
          bottom: 0;
          text-align: center;
        }
      }
      .form-content {
        margin-top: unit(20);
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
    @include m(password) {
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
  }
}
</style>
