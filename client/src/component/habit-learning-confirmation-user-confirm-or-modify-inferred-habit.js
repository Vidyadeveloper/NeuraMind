
import { FormDesignerComponent } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/form-designer-component.js";
import "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/component/ux/blaze-field-group.js";
import { t } from "../../../node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";

class HabitLearningConfirmationUserConfirmOrModifyInferredHabit extends DynamicHtmlElement {
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
  
  const fghabit_profile = this.shadowRoot?.getElementById("fg-habit_profile");
  if (fghabit_profile) {
    fghabit_profile.fields = fghabit_profile.fields.map(field => {
      const translatedLabel = t("habit_profile", "habit_profile." + field.id, field.name);
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
      
        <blaze-field-group id="fg-habit_profile" context="habit_profile"></blaze-field-group>
      
    `;

    
      const fghabit_profile = this.shadowRoot.getElementById("fg-habit_profile");
      fghabit_profile.context = "habit_profile";
      fghabit_profile.model = {};
      
      // Set initial fields structure (without translations first)
      fghabit_profile.fields = [{"id":"habit_id","name":"Habit ID","type":"text","required":false,"description":"Unique identifier for the habit.","label":"Habit ID"},{"id":"name","name":"Habit name","type":"text","required":false,"description":"Readable name for the habit (e.g., Morning run).","label":"Habit name"},{"id":"frequency_per_week","name":"Frequency per week","type":"number","required":false,"description":"Detected or desired frequency expressed as number per week.","label":"Frequency per week"},{"id":"detection_confidence","name":"Detection confidence","type":"number","required":false,"description":"System confidence score (0–100) for the inferred habit.","label":"Detection confidence"},{"id":"discovered_on","name":"Discovered on","type":"date","required":false,"description":"Date the habit was first inferred.","label":"Discovered on"},{"id":"user_id","name":"User ID","type":"text","required":false,"description":"Owner of the habit profile.","label":"User ID"}];
      
      // Now apply translations
      this.updateFieldLabels();
      
      fghabit_profile.data = { "habit_profile": this._formData.habit_profile || {} };
   
  }

  populateForm() {
    
    const fghabit_profile = this.shadowRoot?.getElementById("fg-habit_profile");
    if (fghabit_profile) {
      fghabit_profile.data = { "habit_profile": this._formData["habit_profile"] || {} };
    }
  
  }
}

customElements.define("habit-learning-confirmation-user-confirm-or-modify-inferred-habit", HabitLearningConfirmationUserConfirmOrModifyInferredHabit);
export default HabitLearningConfirmationUserConfirmOrModifyInferredHabit;
