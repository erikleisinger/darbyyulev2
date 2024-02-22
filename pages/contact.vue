<template>


  <main class="contact-container">
    <div class="contact-container__inner">
      <h1>My Info</h1>
      <div
        v-for="contact_item in CONTACT_INFO"
        :key="contact_item"
        @click="copyText(contact_item)"
        class="clickable"
      >
        {{ contact_item }}
      </div>
    </div>
    <div class="contact-info__bottom">
      <div
        v-for="item in CONTACT_BOTTOM_ITEMS"
        :key="item.name"
        class="bottom-info-item__wrap"
      >
        <NavBarButton
          :name="item.icon"
          :text="item.name"
          :light="light"
          @click="goTo(item.link)"
          :color="getColor('white')"
        />
      </div>
    </div>
      <NotificationHandler />
  </main>

</template>
<script setup>
import {
  CONTACT_INFO,
  CONTACT_BOTTOM_ITEMS,
} from "@/constants/content/contact";

const { addNotification } = useNotification();
const copyText = (text) => {
  navigator.clipboard.writeText(text);
  addNotification(`Text copied: ${text}`);
};

const { getColor } = useColor();

const goTo = (link) => {
  window.open(link, "_blank");
};
</script>
<style lang="scss" scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @include breakpoint(small) {
    padding: calcDimension(165px, false, false);
    box-sizing: border-box;
  }

  .contact-container__inner {
    background-color: $brand-brown;
    color: $brand-white;
    text-align: center;
    padding: 32px;
    > div {
      margin-top: 10px;

      &:hover {
        text-decoration: underline;
      }
    }

    @include breakpoint(small) {
      padding: 0px calcDimension(144px, false, true);
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 46px;
        line-height: 56px;
      }
      > div {
        font-size: 29px;
        line-height: 39px;
      }
    }
  }

  .contact-info__bottom {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: calcDimension(71px, true, false);
    right: calcDimension(32px, true, true);
    gap: 32px;

    @include breakpoint(small) {
      flex-direction: row;
      bottom: calcDimension(45px, false, false);
      right: calcDimension(49px, false, true);
    }

    .bottom-info-item__wrap {
      max-width: 40px;
      width: 24px;
    }
  }
}
</style>
