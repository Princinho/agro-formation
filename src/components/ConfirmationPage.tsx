import { useState, useEffect } from "react";
import "../styles/Confirmation.css";

// ─── Types ───────────────────────────────────────────────────────
interface OrderDetails {
  buyerName: string;
  buyerEmail: string;
  orderRef: string;
  amount: string;
  purchaseDate: string;
}

// ─── Helpers ─────────────────────────────────────────────────────

/**
 * Reads order details from URL query parameters.
 *
 * Chariow (and most payment platforms) can append params to the redirect URL.
 * Configure your redirect URL in Chariow like:
 *
 *   https://votre-site.com/confirmation
 *     ?name={customer_name}
 *     &email={customer_email}
 *     &ref={order_id}
 *     &amount={amount}
 *
 * The param names in {braces} are Chariow's template variables — check their
 * dashboard under "Redirect URL" or "Webhook" settings for the exact names.
 * Adjust the keys in the function below to match what Chariow actually sends.
 */
function readOrderFromUrl(): OrderDetails {
  const params = new URLSearchParams(window.location.search);

  return {
    // Adjust these keys to match Chariow's actual param names
    buyerName: params.get("name") ?? params.get("customer_name") ?? "",
    buyerEmail: params.get("email") ?? params.get("customer_email") ?? "",
    orderRef:
      params.get("ref") ??
      params.get("order_id") ??
      params.get("transaction_id") ??
      "",
    amount: params.get("amount") ?? "65 600",
    purchaseDate: params.get("date") ?? new Date().toISOString(),
  };
}

function formatDate(dateStr: string): string {
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
}

// ─── Sub-components ───────────────────────────────────────────────

function SuccessIcon() {
  return (
    <div className="confirm-card__icon-wrap">
      <div className="confirm-card__icon">✓</div>
    </div>
  );
}

// Recap of the fixed product info (from Chariow page)
function OrderSummary({ order }: { order: OrderDetails }) {
  const hasRef = Boolean(order.orderRef);
  const hasName = Boolean(order.buyerName);
  const hasEmail = Boolean(order.buyerEmail);

  return (
    <div className="confirm-summary">
      {/* Product header */}
      <div className="confirm-summary__header">
        <div>
          <p className="confirm-summary__product-label">
            Agrobusiness Rentable au Togo
          </p>
          <h2 className="confirm-summary__product-name">
            Formation en présentiel &amp; streaming
          </h2>
          <div className="confirm-summary__badges">
            <span className="badge badge--presentiel">
              🏛️ Présentiel · Paris
            </span>
            <span className="badge badge--streaming">💻 Streaming inclus</span>
          </div>
        </div>

        <div className="confirm-summary__price-block">
          <div className="confirm-summary__price-original">80 000 FCFA</div>
          <div className="confirm-summary__price">{order.amount}</div>
          <div className="confirm-summary__currency">FCFA</div>
        </div>
      </div>

      {/* Detail rows */}
      <div className="confirm-summary__rows">
        {hasRef && (
          <div className="confirm-summary__row">
            <div className="confirm-summary__row-icon">🎫</div>
            <span className="confirm-summary__row-label">
              Référence commande
            </span>
            <span className="confirm-summary__row-value confirm-summary__row-value--mono">
              {order.orderRef}
            </span>
          </div>
        )}

        {hasName && (
          <div className="confirm-summary__row">
            <div className="confirm-summary__row-icon">👤</div>
            <span className="confirm-summary__row-label">Participant</span>
            <span className="confirm-summary__row-value">
              {order.buyerName}
            </span>
          </div>
        )}

        {hasEmail && (
          <div className="confirm-summary__row">
            <div className="confirm-summary__row-icon">✉️</div>
            <span className="confirm-summary__row-label">
              Email de confirmation
            </span>
            <span className="confirm-summary__row-value">
              {order.buyerEmail}
            </span>
          </div>
        )}

        <div className="confirm-summary__row">
          <div className="confirm-summary__row-icon">📅</div>
          <span className="confirm-summary__row-label">
            Date de la formation
          </span>
          <span className="confirm-summary__row-value">
            09 Mai 2026 · Paris
          </span>
        </div>

        <div className="confirm-summary__row">
          <div className="confirm-summary__row-icon">🕐</div>
          <span className="confirm-summary__row-label">Date d'achat</span>
          <span className="confirm-summary__row-value">
            {formatDate(order.purchaseDate)}
          </span>
        </div>
      </div>
    </div>
  );
}

function ChariowNote() {
  return (
    <div className="confirm-chariow-note">
      <span className="confirm-chariow-note__icon">📧</span>
      <p className="confirm-chariow-note__text">
        <strong>Un reçu de paiement</strong> vous a été envoyé par email. Si vous ne le recevez pas dans les prochaines minutes, vérifiez
        vos spams ou contactez-nous à l'adresse indiquée en bas de page.
      </p>
    </div>
  );
}

function NextSteps() {
  const steps: { label: string; desc: string }[] = [
    {
      label: "Reçu de paiement",
      desc: "Chariow vous a envoyé un reçu automatique par email. Conservez-le comme preuve d'inscription.",
    },
    {
      label: "Confirmation de participation",
      desc: "Vous recevrez un email de l'équipe d'Apélété ADOUKONOU confirmant votre place et contenant les informations pratiques.",
    },
    {
      label: "Lieu exact à Paris",
      desc: "L'adresse précise de la salle vous sera communiquée par email dès qu'elle sera confirmée, bien avant le 09 Mai 2026.",
    },
    {
      label: "Lien de streaming",
      desc: "Vous recevrez votre lien d'accès personnel pour suivre la session en direct depuis n'importe où.",
    },
  ];

  return (
    <div className="confirm-next">
      <p className="confirm-next__title">Ce qui se passe maintenant</p>
      <div className="confirm-next__steps">
        {steps.map((s, i) => (
          <div key={i} className="confirm-next__step">
            <div className="confirm-next__step-number">{i + 1}</div>
            <div>
              <p className="confirm-next__step-label">{s.label}</p>
              <p className="confirm-next__step-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Modules from the Chariow page
function Modules() {
  const modules = [
    "Comment réussir son projet au Togo depuis la diaspora ?",
    "Les clés d'un retour réussi de la diaspora en Afrique",
    "Comment s'établir au Togo comme entrepreneur expatrié",
  ];

  return (
    <div className="confirm-next" style={{ marginBottom: "28px" }}>
      <p className="confirm-next__title">Au programme · 3 modules</p>
      <div className="confirm-next__steps">
        {modules.map((m, i) => (
          <div key={i} className="confirm-next__step">
            <div className="confirm-next__step-number">{i + 1}</div>
            <div>
              <p className="confirm-next__step-label">{m}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShareSection({ onCopy }: { onCopy: () => void }) {
  const shareText =
    "Je participe à la formation « L'Agrobusiness rentable au Togo » par Apélété ADOUKONOU — Présentiel à Paris + Streaming, 09 Mai 2026. 🌱 Rejoins-moi : https://dcaqaymu.mychariow.shop/prd_ae2gfq";

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="confirm-share">
      <p className="confirm-share__label">
        Partagez l'événement avec votre entourage 🌍
      </p>
      <div className="confirm-share__buttons">
        <a
          href="https://tiktok.com/@apelete_a"
          target="_blank"
          rel="noreferrer noopener"
          className="share-btn share-btn--tiktok"
        >
          <span>▶</span> TikTok @apelete_a
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer" 
          className="share-btn share-btn--whatsapp"
        >
          <span>💬</span> WhatsApp
        </a>
        <button onClick={onCopy} className="share-btn share-btn--copy">
          <span>🔗</span> Copier le lien
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────
export default function ConfirmationPage() {
  const [copied, setCopied] = useState<boolean>(false);
  const order = readOrderFromUrl();

  const handleCopy = () => {
    navigator.clipboard
      .writeText("https://dcaqaymu.mychariow.shop/prd_ae2gfq")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="confirm-page">
      <div className="grain-overlay" aria-hidden="true" />
      <div className="confirm-page__ring confirm-page__ring--xl" />
      <div className="confirm-page__ring confirm-page__ring--lg" />
      <div className="confirm-page__ring confirm-page__ring--md" />

      {/* Logo */}
      <a href="/" className="confirm-page__logo">
        <span>La Cible &nbsp;</span>Sarl
      </a>

      {/* Card */}
      <div className="confirm-card">
        <SuccessIcon />

        <h1 className="confirm-card__title">
          Bienvenue dans
          <br />
          <em>l'aventure !</em>
        </h1>
        <p className="confirm-card__subtitle">
          Votre paiement a été confirmé. Vous êtes officiellement inscrit(e) à
          la formation <strong>Agrobusiness rentable au Togo</strong> du 09 Mai
          2026.
        </p>

        <OrderSummary order={order} />
        <ChariowNote />
        <NextSteps />
        <Modules />

        {/* Actions */}
        <div className="confirm-actions">
          <a
            href="https://tiktok.com/@apelete_a"
            target="_blank"
            rel="noreferrer noopener"
            className="cta-btn confirm-actions__primary"
          >
            Suivre @apelete_a sur TikTok
          </a>
          <a
            href="/"
            className="cta-btn cta-btn--outline confirm-actions__secondary"
          >
            Retour à l'accueil
          </a>
        </div>

        <ShareSection onCopy={handleCopy} />
      </div>

      {/* Footer */}
      <p className="confirm-page__footer-note">
        Un problème avec votre inscription ?<br />
        Contactez-nous au <a href="tel:+22898890471">+228 70 32 16 76</a>
        <br />
        <a
          href="https://agrobusinessafrique2026.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          agrobusinessafrique2026.com
        </a>
        {" · "}© 2025 Apélété ADOUKONOU · La Cible Sarl
      </p>

      {copied && (
        <div className="copied-toast">✓ Lien copié dans le presse-papiers</div>
      )}
    </div>
  );
}
