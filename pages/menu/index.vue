<template>
    <DocComponent
        title="Vue Menu Component"
        header="Menu"
        description="Menu is a navigation/command component that supports dynamic and static positioning."
        :componentDocs="docs"
        :apiDocs="['Menu', 'MenuItem']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/menu/AccessibilityDoc.vue';
import BasicDoc from '@/doc/menu/BasicDoc.vue';
import GroupDoc from '@/doc/menu/GroupDoc.vue';
import ImportDoc from '@/doc/menu/ImportDoc.vue';
import PopupDoc from '@/doc/menu/PopupDoc.vue';
import RouterDoc from '@/doc/menu/RouterDoc.vue';
import TemplateDoc from '@/doc/menu/TemplateDoc.vue';
import PTComponent from '@/doc/menu/pt/index.vue';
import ThemingDoc from '@/doc/menu/theming/index.vue';

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
                    id: 'group',
                    label: 'Group',
                    component: GroupDoc
                },
                {
                    id: 'popup',
                    label: 'Popup',
                    component: PopupDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
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
