<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Animate from 'primevue/animate';
                
app.directive('animate', Animate);
`
            }
        };
    }
};
</script>
