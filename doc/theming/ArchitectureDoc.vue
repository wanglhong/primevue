<template>
    <DocSectionText v-bind="$attrs">
        <p class="line-height-3 bg-indigo-600 text-white p-3 text-lg" style="border-radius: 10px">
            <strong>Note</strong>: In near future, theming architecture of the styled mode will be redesigned to utilize CSS variables instead of SCSS variables in a backward compatible way for a dynamic approach.
        </p>
        <p>
            PrimeVue is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into two parts, core and theme. The core resides
            inside PrimeVue to implement the structure of the components such as positioning whereas theme brings the colors and spacing.
        </p>
        <img alt="Architecture" src="https://primefaces.org/cdn/primevue/images/architecture.jpg" class="w-full" />
    </DocSectionText>
</template>
