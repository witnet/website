<template>
  <link
    href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
    rel="stylesheet"
    type="text/css"
  />
  <component :is="'script'" async>
    ;(function ($) { window.fnames = new Array() window.ftypes = new Array()
    fnames[0] = 'EMAIL' ftypes[0] = 'email' })(jQuery) var $mcj =
    jQuery.noConflict(true)
  </component>
  <form
    id="mc-embedded-subscribe-form"
    action="https://witnet.us10.list-manage.com/subscribe/post?u=5a67ab2b3f2db1c50be62f761&amp;id=aaf328ec13&amp;f_id=007362e5f0"
    method="post"
    name="mc-embedded-subscribe-form"
    class="validate"
    target="_blank"
  >
    <div id="mc_embed_signup_scroll" class="flex shadow-sm">
      <div class="mc-field-group">
        <input
          id="mce-EMAIL"
          type="email"
          placeholder="name@domain.com"
          name="EMAIL"
          class="text-black-950 outline-none required email rounded-l-full min-w-[300px] sm:min-w-full py-sm px-md block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          required=""
          value=""
        />
      </div>
      <div id="mce-responses" class="clear">
        <div
          id="mce-error-response"
          class="response"
          style="display: none"
        ></div>
        <div
          id="mce-success-response"
          class="response"
          style="display: none"
        ></div>
      </div>
      <div style="position: absolute; left: -5000px" aria-hidden="true">
        <input
          type="text"
          name="b_5a67ab2b3f2db1c50be62f761_aaf328ec13"
          tabindex="-1"
          value=""
        />
      </div>
      <div class="clear">
        <input
          id="mc-embedded-subscribe"
          type="submit"
          name="subscribe"
          class="text-wit-blue-500 margin rounded-r-full py-sm px-md inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-black-950 bg-black-950 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          :value="subscribeLocale"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
const { t } = useI18n()
const subscribeLocale = t('newsletter.action')
</script>

<style lang="scss">
#mc-embedded-subscribe {
  margin: 0px !important;
}
</style>
