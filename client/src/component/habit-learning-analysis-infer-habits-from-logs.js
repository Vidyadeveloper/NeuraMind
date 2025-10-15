
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";

class HabitLearningAnalysisInferHabitsFromLogs extends DynamicHtmlElement {
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
  
  const fgactivity_log = this.shadowRoot?.getElementById("fg-activity_log");
  if (fgactivity_log) {
    fgactivity_log.fields = fgactivity_log.fields.map(field => {
      const translatedLabel = t("activity_log", "activity_log." + field.id, field.name);
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
      
        <blaze-field-group id="fg-activity_log" context="activity_log"></blaze-field-group>
      
    `;

    
      const fgactivity_log = this.shadowRoot.getElementById("fg-activity_log");
      fgactivity_log.context = "activity_log";
      fgactivity_log.model = {};
      
      // Set initial fields structure (without translations first)
      fgactivity_log.fields = [{"id":"activity_type","name":"Activity type","type":"text","required":false,"description":"Type/category of the recorded activity (e.g., app_open, location_change).","label":"Activity type"},{"id":"metadata","name":"Metadata","type":"text","required":false,"description":"Freeform JSON/text with additional activity context.","label":"Metadata"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fgactivity_log.data = { "activity_log": this._formData.activity_log || {} };
   
  }

  populateForm() {
    
    const fgactivity_log = this.shadowRoot?.getElementById("fg-activity_log");
    if (fgactivity_log) {
      fgactivity_log.data = { "activity_log": this._formData["activity_log"] || {} };
    }
  
  }
}

customElements.define("habit-learning-analysis-infer-habits-from-logs", HabitLearningAnalysisInferHabitsFromLogs);
export default HabitLearningAnalysisInferHabitsFromLogs;
