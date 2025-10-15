
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";

class PrivacyDataRequestVerificationVerifyRequesterSIdentity extends DynamicHtmlElement {
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
  
  const fguser_profile = this.shadowRoot?.getElementById("fg-user_profile");
  if (fguser_profile) {
    fguser_profile.fields = fguser_profile.fields.map(field => {
      const translatedLabel = t("user_profile", "user_profile." + field.id, field.name);
      console.log("🔍 Checking translation:", { id: field.id, name: field.name, translatedLabel });
      return {
        ...field,
        label: translatedLabel
      };
    });
  }
  const fgdata_request = this.shadowRoot?.getElementById("fg-data_request");
  if (fgdata_request) {
    fgdata_request.fields = fgdata_request.fields.map(field => {
      const translatedLabel = t("data_request", "data_request." + field.id, field.name);
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
      
        <blaze-field-group id="fg-user_profile" context="user_profile"></blaze-field-group>
      
        <blaze-field-group id="fg-data_request" context="data_request"></blaze-field-group>
      
    `;

    
      const fguser_profile = this.shadowRoot.getElementById("fg-user_profile");
      fguser_profile.context = "user_profile";
      fguser_profile.model = {};
      
      // Set initial fields structure (without translations first)
      fguser_profile.fields = [{"id":"email","name":"Email","type":"email","required":false,"description":"Primary email used for communications and verification.","label":"Email"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fguser_profile.data = { "user_profile": this._formData.user_profile || {} };
   
      const fgdata_request = this.shadowRoot.getElementById("fg-data_request");
      fgdata_request.context = "data_request";
      fgdata_request.model = {};
      
      // Set initial fields structure (without translations first)
      fgdata_request.fields = [{"id":"user_id","name":"User ID","type":"text","required":false,"description":"Requesting user's identifier.","label":"User ID"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgdata_request.data = { "data_request": this._formData.data_request || {} };
   
  }

  populateForm() {
    
    const fguser_profile = this.shadowRoot?.getElementById("fg-user_profile");
    if (fguser_profile) {
      fguser_profile.data = { "user_profile": this._formData["user_profile"] || {} };
    }
  
    const fgdata_request = this.shadowRoot?.getElementById("fg-data_request");
    if (fgdata_request) {
      fgdata_request.data = { "data_request": this._formData["data_request"] || {} };
    }
  
  }
}

customElements.define("privacy-data-request-verification-verify-requester-s-identity", PrivacyDataRequestVerificationVerifyRequesterSIdentity);
export default PrivacyDataRequestVerificationVerifyRequesterSIdentity;
