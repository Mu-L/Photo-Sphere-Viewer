<template>
    <div class="demo-gallery-item">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.demo-gallery-item {
    width: 280px;
    margin-right: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: box-shadow .2s ease-in-out !important;
    color: inherit !important;
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        text-decoration: none !important;
    }

    p:first-child {
        margin: 0;
    }

    h3,
    p:last-child {
        margin: 1rem;
    }

    .header-anchor {
        display: none;
    }

    .icon.outbound {
        display: none;
        ;
    }
}
</style>
