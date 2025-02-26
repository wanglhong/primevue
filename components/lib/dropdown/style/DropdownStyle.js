import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-dropdown {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }

    .p-dropdown-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-dropdown-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-dropdown-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .p-dropdown-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-dropdown-label {
        cursor: default;
    }

    .p-dropdown .p-dropdown-panel {
        min-width: 100%;
    }

    .p-dropdown-panel {
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-dropdown-items-wrapper {
        overflow: auto;
    }

    .p-dropdown-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }

    .p-dropdown-item-group {
        cursor: auto;
    }

    .p-dropdown-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-dropdown-filter {
        width: 100%;
    }

    .p-dropdown-filter-container {
        position: relative;
    }

    .p-dropdown-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-fluid .p-dropdown {
        display: flex;
    }

    .p-fluid .p-dropdown .p-dropdown-label {
        width: 1%;
    }
}
`;

const classes = {
    root: ({ instance, props, state }) => [
        'p-dropdown p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-dropdown-clearable': props.showClear && !props.disabled,
            'p-focus': state.focused,
            'p-inputwrapper-filled': instance.hasSelectedOption,
            'p-inputwrapper-focus': state.focused || state.overlayVisible,
            'p-overlay-open': state.overlayVisible
        }
    ],
    input: ({ instance, props }) => [
        'p-dropdown-label p-inputtext',
        {
            'p-placeholder': !props.editable && instance.label === props.placeholder,
            'p-dropdown-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
        }
    ],
    clearIcon: 'p-dropdown-clear-icon',
    trigger: 'p-dropdown-trigger',
    loadingicon: 'p-dropdown-trigger-icon',
    dropdownIcon: 'p-dropdown-trigger-icon',
    panel: ({ instance }) => [
        'p-dropdown-panel p-component',
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    header: 'p-dropdown-header',
    filterContainer: 'p-dropdown-filter-container',
    filterInput: 'p-dropdown-filter p-inputtext p-component',
    filterIcon: 'p-dropdown-filter-icon',
    wrapper: 'p-dropdown-items-wrapper',
    list: 'p-dropdown-items',
    itemGroup: 'p-dropdown-item-group',
    item: ({ instance, state, option, focusedOption }) => [
        'p-dropdown-item',
        {
            'p-highlight': instance.isSelected(option),
            'p-focus': state.focusedOptionIndex === focusedOption,
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'p-dropdown-empty-message'
};

export default BaseStyle.extend({
    name: 'dropdown',
    css,
    classes
});
