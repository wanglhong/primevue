<template>
    <DocComponent
        title="Vue ContextMenu Component"
        header="ContextMenu"
        description="ContextMenu displays an overlay menu on right click of its target."
        :componentDocs="docs"
        :apiDocs="['ContextMenu', 'MenuItem']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/contextmenu/AccessibilityDoc.vue';
import BasicDoc from '@/doc/contextmenu/BasicDoc.vue';
import DocumentDoc from '@/doc/contextmenu/DocumentDoc.vue';
import ImportDoc from '@/doc/contextmenu/ImportDoc.vue';
import RouterDoc from '@/doc/contextmenu/RouterDoc.vue';
import PTComponent from '@/doc/contextmenu/pt/index.vue';
import ThemingDoc from '@/doc/contextmenu/theming/index.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'document',
                    label: 'Document',
                    component: DocumentDoc
                },
                {
                    id: 'router',
                    label: 'Router',
                    component: RouterDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
