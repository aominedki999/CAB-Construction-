import { useState } from 'react';
import { toast } from 'sonner';

/**
 * Quote Request Form Component
 * Allows users to submit construction project quote requests
 * Design: Professional, clean, with red accent color matching brand
 */
export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType || !formData.description) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (!formData.consent) {
      toast.error('Veuillez accepter les conditions');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Demande de devis envoyée avec succès! Nous vous recontacterons bientôt.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        description: '',
        budget: '',
        timeline: '',
        consent: false,
      });
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Nom Complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+224 621 22 34 32"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
            Type de Projet *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all bg-white"
            required
          >
            <option value="">Sélectionnez un type</option>
            <option value="residential">Construction Résidentielle</option>
            <option value="commercial">Construction Commerciale</option>
            <option value="renovation">Rénovation & Réhabilitation</option>
            <option value="eco">Éco-Construction</option>
            <option value="other">Autre</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
          Description du Projet *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Décrivez votre projet en détail..."
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
            Budget Estimé
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all bg-white"
          >
            <option value="">Sélectionnez une gamme</option>
            <option value="0-50m">0 - 50 Millions GNF</option>
            <option value="50-100m">50 - 100 Millions GNF</option>
            <option value="100-500m">100 - 500 Millions GNF</option>
            <option value="500m+">500+ Millions GNF</option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
            Délai Souhaité
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all bg-white"
          >
            <option value="">Sélectionnez un délai</option>
            <option value="urgent">Urgent (1-2 mois)</option>
            <option value="short">Court terme (2-6 mois)</option>
            <option value="medium">Moyen terme (6-12 mois)</option>
            <option value="long">Long terme (12+ mois)</option>
          </select>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-600 cursor-pointer"
          required
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          J'accepte que CAB Construction me contacte pour discuter de ma demande de devis et me partage des informations pertinentes.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Demander un Devis'}
      </button>

      <p className="text-sm text-gray-500 text-center">
        * Champs obligatoires
      </p>
    </form>
  );
}
