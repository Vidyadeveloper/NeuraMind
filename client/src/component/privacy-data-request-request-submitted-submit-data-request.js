
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";

class PrivacyDataRequestRequestSubmittedSubmitDataRequest extends DynamicHtmlElement {
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
      
        <blaze-field-group id="fg-data_request" context="data_request"></blaze-field-group>
      
    `;

    
      const fgdata_request = this.shadowRoot.getElementById("fg-data_request");
      fgdata_request.context = "data_request";
      fgdata_request.model = {};
      
      // Set initial fields structure (without translations first)
      fgdata_request.fields = [{"id":"request_id","name":"Request ID","type":"text","required":false,"description":"Unique identifier for the privacy or data request.","label":"Request ID"},{"id":"request_type","name":"Request type","type":"text","required":false,"description":"Type of request (export, delete, access).","label":"Request type"},{"id":"submitted_on","name":"Submitted on","type":"date","required":false,"description":"Date/time the request was submitted.","label":"Submitted on"},{"id":"user_id","name":"User ID","type":"text","required":false,"description":"Requesting user's identifier.","label":"User ID"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgdata_request.data = { "data_request": this._formData.data_request || {} };
   
  }

  populateForm() {
    
    const fgdata_request = this.shadowRoot?.getElementById("fg-data_request");
    if (fgdata_request) {
      fgdata_request.data = { "data_request": this._formData["data_request"] || {} };
    }
  
  }
}

customElements.define("privacy-data-request-request-submitted-submit-data-request", PrivacyDataRequestRequestSubmittedSubmitDataRequest);
export default PrivacyDataRequestRequestSubmittedSubmitDataRequest;
