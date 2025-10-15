
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";

class IntegrationSetupAuthenticateAuthenticateWithService extends DynamicHtmlElement {
   constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    super.connectedCallback();
    
    // Listen for language changes to update field labels dynamically
    document.addEventListener("lang-changed", () => this.updateFieldLabels());
  }

  // Single method to handle both initial setup and dynamic updates
updateFieldLabels() {
  
  const fgintegration = this.shadowRoot?.getElementById("fg-integration");
  if (fgintegration) {
    fgintegration.fields = fgintegration.fields.map(field => {
      const translatedLabel = t("integration", "integration." + field.id, field.name);
      console.log("🔍 Checking translation:", { id: field.id, name: field.name, translatedLabel });
      return {
        ...field,
        label: translatedLabel
      };
    });
  }
}


  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-integration" context="integration"></blaze-field-group>
      
    `;

    
      const fgintegration = this.shadowRoot.getElementById("fg-integration");
      fgintegration.context = "integration";
      fgintegration.model = {};
      
      // Set initial fields structure (without translations first)
      fgintegration.fields = [{"id":"auth_email","name":"Auth email","type":"email","required":false,"description":"Email used to authenticate with the service.","label":"Auth email"},{"id":"auth_token","name":"Auth token","type":"text","required":false,"description":"OAuth token or API key (stored securely).","label":"Auth token"},{"id":"user_id","name":"User ID","type":"text","required":false,"description":"Owner of the integration.","label":"User ID"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgintegration.data = { "integration": this._formData.integration || {} };
   
  }

  populateForm() {
    
    const fgintegration = this.shadowRoot?.getElementById("fg-integration");
    if (fgintegration) {
      fgintegration.data = { "integration": this._formData["integration"] || {} };
    }
  
  }
}

customElements.define("integration-setup-authenticate-authenticate-with-service", IntegrationSetupAuthenticateAuthenticateWithService);
export default IntegrationSetupAuthenticateAuthenticateWithService;
