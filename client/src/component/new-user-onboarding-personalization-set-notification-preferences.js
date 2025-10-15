
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";

class NewUserOnboardingPersonalizationSetNotificationPreferences extends DynamicHtmlElement {
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
}


  render() {
    this.shadowRoot.innerHTML = `
      
        <blaze-field-group id="fg-user_profile" context="user_profile"></blaze-field-group>
      
    `;

    
      const fguser_profile = this.shadowRoot.getElementById("fg-user_profile");
      fguser_profile.context = "user_profile";
      fguser_profile.model = {};
      
      // Set initial fields structure (without translations first)
      fguser_profile.fields = [{"id":"preferred_channels","name":"Preferred notification channels","type":"text","required":false,"description":"Comma-separated list of channels (e.g., email, push, sms).","label":"Preferred notification channels"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fguser_profile.data = { "user_profile": this._formData.user_profile || {} };
   
  }

  populateForm() {
    
    const fguser_profile = this.shadowRoot?.getElementById("fg-user_profile");
    if (fguser_profile) {
      fguser_profile.data = { "user_profile": this._formData["user_profile"] || {} };
    }
  
  }
}

customElements.define("new-user-onboarding-personalization-set-notification-preferences", NewUserOnboardingPersonalizationSetNotificationPreferences);
export default NewUserOnboardingPersonalizationSetNotificationPreferences;
