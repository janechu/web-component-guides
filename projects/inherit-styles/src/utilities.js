let globalSheets = null;

function getGlobalStyleSheets() {
    if (globalSheets === null) {
        globalSheets = Array.from(document.styleSheets)
        .map(x => {
            const sheet = new CSSStyleSheet();
            const css = Array.from(x.cssRules).map((rule) => {
                return rule.cssText
            }).join(" ");
            sheet.replaceSync(css);
            return sheet;
        });
    }

    return globalSheets;
}

export function addGlobalStylesToShadowRoot(shadowRoot) {
    shadowRoot.adoptedStyleSheets.push(
        ...getGlobalStyleSheets()
    );
}

/**
 * Here once global sheets have been added, we can apply any sheets
 * pegged with the attribute [data-selector-styles='<id>'] to the shadowRoot
 * of the web component
 */
function getSelectorStyleSheets(selector) {
    if (globalSheets === undefined) {
        globalSheets = Array.from(document.styleSheets)
        .map(x => {
            if (x.ownerNode.dataset.selectorStyles === selector) {
                const sheet = new CSSStyleSheet();
                const selectorCss = Array.from(x.cssRules).map((rule) => {
                    return rule.cssText
                }).join(" ");
                sheet.replaceSync(selectorCss);
                return sheet;
            }
        });
    }

    return globalSheets;
}

export function addSelectorsToShadowRoot(shadowRoot, selector) {
    shadowRoot.adoptedStyleSheets.push(
        ...getSelectorStyleSheets(selector)
    )
}