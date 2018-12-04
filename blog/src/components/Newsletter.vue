<template>
    <div class="c-newsletter o-theme" :class="theme + category">
        <div class="c-newsletter__content o-flex o-flex--column">
            <div class="c-newsletter__text">
                Sign up for our newsletter!
            </div>
            <form class="c-newsletter__form o-flex" action="mailto:someone@example.com" method="post" enctype="text/plain">
                <input class="c-newsletter__input" type="text" placeholder="Enter a valid email address">
                <input class="c-newsletter__button" type="submit">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            category: {
                type: String
            }
        },
        data(){
            return {
                theme: "o-theme--"
            }
        }

    }
</script>  