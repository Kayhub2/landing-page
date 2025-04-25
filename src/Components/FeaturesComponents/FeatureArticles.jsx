import "./FeatureArticles.css";
import { DummyArticle } from "./FeatureArticlesComponents/DummyArticle";


function FeatureArticles() {
  return (
    <div className="feature-articls">
      <h4>Features</h4>

      <div>
        <DummyArticle image="../image/invoice.png" title="Our Management" description="Meet our team of passionate peersonnel who would help you succeed." />
        
        <DummyArticle image="../image/notes.png" title="Request" description="Make your request today. We want to work with you." />

        <DummyArticle image="../image/skills.png" title="Our Success Tracking" description="Check our testimonials. You can trust us." />
      </div>
    </div>
  )
}

export {FeatureArticles};