import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 via-pink-100 to-rose-100 dark:from-orange-900/30 dark:via-pink-900/30 dark:to-rose-900/30 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Tarification simple
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            🎉 Captura — <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Un prix unique, toutes les fonctionnalités</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Crée ton espace privé, invite tes participants et capture tous les moments en un seul endroit.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-8 md:p-12 rounded-3xl border-2 border-border bg-gradient-to-br from-card to-muted/20 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 text-white text-sm font-bold shadow-lg">
                RECOMMANDÉ
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">💎 Pack Captura</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  99 €
                </span>
                <span className="text-xl text-muted-foreground">/ événement</span>
              </div>
              <p className="text-muted-foreground">(paiement unique)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">👥 Invités illimités</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">📸 Partage instantané de photos & vidéos</p>
                    <p className="text-sm text-muted-foreground">(qualité originale, sans compression)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">🎨 Thème visuel personnalisé</p>
                    <p className="text-sm text-muted-foreground">(couleurs et design adaptés à ton événement)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">🗓️ Accès Admin complet</p>
                    <p className="text-sm text-muted-foreground">gestion, analytics, téléchargement des médias</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">🎮 Tous les jeux inclus :</p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                      <li>• Interactive Quizzes</li>
                      <li>• Hashtag Challenges</li>
                      <li>• Love Story Timeline</li>
                      <li>• Music Requests (Spotify)</li>
                      <li>• Event Schedule</li>
                      <li>• People Bingo (Icebreaker)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">☁️ Stockage inclus</p>
                    <p className="text-sm text-muted-foreground">pendant 3 mois après l'événement</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">💬 Support client par e-mail</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="hero" size="xl" className="group">
                Créer mon événement
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Option */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="p-6 rounded-2xl border border-border bg-gradient-to-br from-card to-muted/20">
            <h4 className="text-xl font-semibold mb-4 text-center">⚙️ Option disponible</h4>
            <div className="flex items-center justify-between p-4 rounded-xl bg-background/50">
              <div>
                <p className="font-semibold">+3 mois de stockage supplémentaire</p>
                <p className="text-sm text-muted-foreground">Prolonge la durée de ton événement et garde tes souvenirs plus longtemps</p>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                15 €
              </div>
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">💡 En résumé</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="p-4 text-left font-semibold">Type d'événement</th>
                  <th className="p-4 text-center font-semibold">Prix</th>
                  <th className="p-4 text-center font-semibold">Invités</th>
                  <th className="p-4 text-center font-semibold">Jeux & fonctionnalités</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  'Mariage',
                  'Anniversaire',
                  'Team Building',
                  'EVJF / EVG',
                  'Voyage de groupe',
                  'Événement d\'hôtel / pro'
                ].map((event) => (
                  <tr key={event} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4">{event}</td>
                    <td className="p-4 text-center font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                      99 €
                    </td>
                    <td className="p-4 text-center">Illimités</td>
                    <td className="p-4 text-center">Tous inclus</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
