import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDesign } from '../context/DesignContext';
import { ROUTES } from '../constants';
import { PrimaryButton, IconRenderer } from '../components';

export const Quote = () => {
  const { design } = useDesign();
  const navigate = useNavigate();
  const [copiedStatus, setCopiedStatus] = useState(false);
  const [copiedLinkStatus, setCopiedLinkStatus] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [sharingStatus, setSharingStatus] = useState<string | null>(null);

  // Fallbacks if user enters this page directly without full state
  const categoryName = design.selectedCategory?.name || "Maxi Dress";
  const sketchTitle = design.selectedSketch?.title || "A-Line Fluid Silhouette";
  const fabricName = design.selectedFabric?.name || "Rose Blush Satin";
  const fabricCategory = design.selectedFabricCategory?.name || "Satin";
  const measurements = design.measurements;
  const occasion = design.previewData?.occasion || "Wedding";
  const embellishmentsText = design.previewData?.embellishments && design.previewData.embellishments.length > 0
    ? design.previewData.embellishments.map(id => {
        if (id === 'lining') return 'Premium Inner Lining';
        if (id === 'embroidery') return 'Handcrafted Zardozi Trim';
        if (id === 'belt') return 'Detachable Fabric Belt';
        if (id === 'tassels') return 'Artisan Glass Tassels';
        return id;
      }).join(', ')
    : 'None selected';

  // Target WhatsApp master tailor phone number
  const tailorPhoneNumber = "918767461199";
  const tailorPhoneDisplay = "+91 87674 61199";

  // Generated image resolution
  const rawImage = design.previewData?.outfitImage || design.selectedReference?.image || design.selectedSketch?.image;
  const absoluteImageUrl = rawImage 
    ? (rawImage.startsWith('http') ? rawImage : `${typeof window !== 'undefined' ? window.location.origin : ''}${rawImage}`)
    : '';

  // Construct WhatsApp Prefilled Message including image visual link
  const buildQuotationMessage = () => {
    let msg = `Hello PEONY Atelier! 🌸\n\n`;
    msg += `I have finalized my custom dress recipe! Here is my bespoke configuration and design draft:\n\n`;
    msg += `⚧ *Gender:* ${design.gender || 'Female'}\n`;
    msg += `👗 *Outfit Type:* ${categoryName}\n`;
    msg += `📐 *Silhouette Sketch:* ${sketchTitle}\n`;
    msg += `🎨 *Fabric Swatch:* ${fabricName} (${fabricCategory})\n`;
    msg += `📏 *Fitting Size:* Size ${measurements.size}\n`;
    
    if (measurements.height) msg += `   - Height: ${measurements.height} inches\n`;
    if (measurements.bust) msg += `   - Bust: ${measurements.bust} inches\n`;
    if (measurements.waist) msg += `   - Waist: ${measurements.waist} inches\n`;
    if (measurements.hips) msg += `   - Hips: ${measurements.hips} inches\n`;
    
    msg += `✨ *Occasion:* ${occasion}\n`;
    msg += `💎 *Embellishments:* ${embellishmentsText}\n`;
    
    if (design.previewData?.needItBy) {
      msg += `📅 *Need it by:* ${design.previewData.needItBy}\n`;
    }
    
    if (measurements.notes) {
      msg += `📝 *Tailor Instructions:* "${measurements.notes}"\n`;
    }
    
    if (absoluteImageUrl) {
      msg += `\n🖼️ *Generated Couture Outfit Image:* \n${absoluteImageUrl}\n`;
    }
    
    msg += `\nPlease let me know the stitching quotation and estimated delivery timeline. Thank you!`;
    return msg;
  };

  const formattedMsg = buildQuotationMessage();
  const whatsappUrl = `https://wa.me/${tailorPhoneNumber}?text=${encodeURIComponent(formattedMsg)}`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(formattedMsg);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 3000);
  };

  const handleCopyImageLink = () => {
    if (!absoluteImageUrl) return;
    navigator.clipboard.writeText(absoluteImageUrl);
    setCopiedLinkStatus(true);
    setTimeout(() => setCopiedLinkStatus(false), 3000);
  };

  // Download generated image so user can easily attach on WhatsApp
  const handleDownloadImage = async () => {
    if (!rawImage) return;
    try {
      setDownloading(true);
      const res = await fetch(rawImage);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `peony-couture-${design.selectedCategory?.id || 'design'}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.info('Download note:', e);
      window.open(rawImage, '_blank');
    } finally {
      setDownloading(false);
    }
  };

  // Native Web Share API to share actual image file directly to WhatsApp on supported devices
  const handleShareWithImage = async () => {
    try {
      setSharingStatus('sharing');
      if (rawImage && typeof navigator !== 'undefined' && navigator.share && navigator.canShare) {
        const response = await fetch(rawImage);
        const blob = await response.blob();
        const file = new File([blob], 'peony-couture-design.png', { type: blob.type || 'image/png' });
        
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `PEONY Atelier Custom Dress (${categoryName})`,
            text: formattedMsg,
            files: [file],
          });
          setSharingStatus('shared');
          setTimeout(() => setSharingStatus(null), 3000);
          return;
        }
      }
      // Fallback: Open WhatsApp directly
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSharingStatus(null);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }
      setSharingStatus(null);
    }
  };

  const handleRestart = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fade-in" id="quote-final-container">
      
      {/* Visual Header card */}
      <div className="bg-brand-burgundy text-white p-8 sm:p-12 rounded-[40px] text-center flex flex-col items-center gap-6 shadow-xl relative overflow-hidden">
        {/* Decorative background lights */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-44 h-44 bg-brand-pink/15 rounded-full blur-3xl -z-10" />

        <div className="w-16 h-16 rounded-full bg-brand-soft-pink/20 text-brand-pink border border-brand-pink/30 flex items-center justify-center animate-bounce mb-2">
          <IconRenderer name="check" size={28} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white">
          Your Design Recipe is Finalized
        </h1>

        <p className="text-brand-cream/80 text-xs sm:text-sm max-w-xl leading-relaxed font-sans font-medium">
          We have compiled your full tailoring configuration and custom generated visual. Share it directly with our master tailor on WhatsApp at <strong className="text-brand-pink font-semibold">{tailorPhoneDisplay}</strong> for an instant stitching quote and timeline.
        </p>

        {/* Tailor WhatsApp Badge with live pulse */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-brand-pink/30 text-xs text-brand-cream">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] font-bold">WhatsApp Direct: {tailorPhoneDisplay}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto mt-2">
          {/* Direct WhatsApp trigger */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold tracking-wider uppercase bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-101 focus:outline-none cursor-pointer"
            id="dispatch-whatsapp-btn"
          >
            <IconRenderer name="phone" size={15} />
            <span>Send to WhatsApp ({tailorPhoneDisplay})</span>
          </a>

          {/* Share with Image (Web Share API) */}
          <button
            type="button"
            onClick={handleShareWithImage}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase bg-brand-pink hover:bg-brand-pink/90 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
            id="share-image-whatsapp-btn"
          >
            <IconRenderer name="share-2" size={15} />
            <span>{sharingStatus === 'sharing' ? 'Preparing Image...' : 'Share Image & Specs'}</span>
          </button>

          {/* Copy payload anchor */}
          <button
            type="button"
            onClick={handleCopyToClipboard}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase bg-white/10 hover:bg-white/15 text-white border border-brand-pink/40 rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
            id="copy-quote-payload-btn"
          >
            <IconRenderer name={copiedStatus ? "check" : "copy"} size={14} />
            <span>{copiedStatus ? "Recipe Copied!" : "Copy Recipe Text"}</span>
          </button>
        </div>
      </div>

      {/* Grid: Generated Image Card + Bespoke Spec sheet & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
        
        {/* Left column (5 cols): Generated Outfit Visual Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white border border-brand-border-pink p-5 rounded-3xl shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-brand-border-pink pb-3">
              <div className="flex items-center gap-2">
                <IconRenderer name="sparkles" size={16} className="text-brand-pink" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-burgundy">
                  Generated Couture Visual
                </h3>
              </div>
              <span className="text-[9px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold uppercase">
                WhatsApp Ready
              </span>
            </div>

            {/* Image container */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-cream/40 border border-brand-border-pink shadow-inner group">
              {rawImage ? (
                <img
                  src={rawImage}
                  alt="Custom Couture Design Preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-brand-deep/40 p-4 text-center">
                  <IconRenderer name="scissors" size={32} className="mb-2" />
                  <span className="text-xs font-medium">Design visual rendered upon customization</span>
                </div>
              )}

              {/* Tag overlay */}
              <div className="absolute top-3 left-3 bg-brand-deep/80 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-full border border-white/20">
                {categoryName} • {fabricName}
              </div>

              {/* Direct image link pill at bottom */}
              {absoluteImageUrl && (
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2 flex items-center justify-between text-[10px] text-brand-deep shadow-sm">
                  <span className="truncate max-w-[200px] text-brand-deep/70 font-mono">
                    {absoluteImageUrl}
                  </span>
                  <a
                    href={absoluteImageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-pink hover:text-brand-burgundy font-bold uppercase tracking-wider shrink-0 flex items-center gap-1 ml-2"
                  >
                    <span>Open</span>
                    <IconRenderer name="external-link" size={10} />
                  </a>
                </div>
              )}
            </div>

            {/* Quick Actions for Image */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handleDownloadImage}
                disabled={downloading || !rawImage}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-[11px] font-bold tracking-wide uppercase bg-brand-cream/60 hover:bg-brand-soft-pink text-brand-deep border border-brand-border-pink rounded-xl transition-all cursor-pointer disabled:opacity-50"
                id="quote-download-image-btn"
              >
                <IconRenderer name="download" size={13} className="text-brand-pink" />
                <span>{downloading ? "Downloading..." : "Download Image"}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyImageLink}
                disabled={!absoluteImageUrl}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-[11px] font-bold tracking-wide uppercase bg-brand-cream/60 hover:bg-brand-soft-pink text-brand-deep border border-brand-border-pink rounded-xl transition-all cursor-pointer disabled:opacity-50"
                id="quote-copy-link-btn"
              >
                <IconRenderer name={copiedLinkStatus ? "check" : "copy"} size={13} className="text-brand-pink" />
                <span>{copiedLinkStatus ? "Link Copied!" : "Copy Image Link"}</span>
              </button>
            </div>

            {/* WhatsApp Note */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-3.5 flex items-start gap-2.5">
              <IconRenderer name="phone" className="text-emerald-600 shrink-0 mt-0.5" size={15} />
              <div className="text-[11px] text-emerald-950 leading-relaxed font-sans font-medium">
                <span className="font-bold">Image sharing on WhatsApp:</span> Clicking <strong className="font-semibold text-emerald-800">Send to WhatsApp</strong> pre-attaches this image link directly into the chat with <strong className="font-semibold">{tailorPhoneDisplay}</strong> so our master tailor can view it instantly!
              </div>
            </div>
          </div>
        </div>

        {/* Right column (7 cols): Summary recipe print & Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Spec sheet */}
          <div className="bg-white border border-brand-border-pink p-6 rounded-3xl shadow-sm flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-burgundy border-b border-brand-border-pink pb-3 flex items-center justify-between">
              <span>Bespoke Spec sheet</span>
              <span className="text-[9px] font-mono bg-brand-soft-pink text-brand-pink px-2.5 py-0.5 rounded-full font-bold uppercase">EST. RECIPE</span>
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Gender:</span>
                <span className="font-bold text-brand-deep">{design.gender || 'Female'}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Outfit Silhouette:</span>
                <span className="font-bold text-brand-deep">{categoryName}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Design Draping:</span>
                <span className="font-bold text-brand-deep">{sketchTitle}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Fabric Base:</span>
                <span className="font-bold text-brand-deep">{fabricName} ({fabricCategory})</span>
              </div>
              <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Occasion Purpose:</span>
                <span className="font-bold text-brand-deep">{occasion}</span>
              </div>
              {design.previewData?.needItBy && (
                <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                  <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Need it by:</span>
                  <span className="font-bold text-brand-deep font-mono">{design.previewData.needItBy}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Embellishments:</span>
                <span className="font-bold text-brand-deep text-right max-w-[200px]">{embellishmentsText}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Fitted Standard Size:</span>
                <span className="font-bold text-brand-deep">Size {measurements.size}</span>
              </div>
              {measurements.height && (
                <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                  <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Custom Metrics (H/B/W):</span>
                  <span className="font-bold text-brand-deep">
                    {measurements.height}" / {measurements.bust || '-'}" / {measurements.waist || '-'}"
                  </span>
                </div>
              )}
              {measurements.notes && (
                <div className="flex justify-between border-b border-brand-border-pink/40 pb-2">
                  <span className="text-brand-pink font-bold uppercase tracking-wider text-[10px]">Notes:</span>
                  <span className="font-medium text-brand-deep text-right max-w-[220px] italic">"{measurements.notes}"</span>
                </div>
              )}
            </div>

            {/* Quick-alert advice banner */}
            <div className="bg-brand-soft-pink/30 p-4 border border-brand-border-pink rounded-2xl flex gap-3 items-start mt-1">
              <IconRenderer name="info" className="text-brand-pink shrink-0 mt-0.5" size={14} />
              <p className="text-[11px] text-brand-deep/80 leading-relaxed font-sans font-medium">
                Need a secondary fitting appointment or customized fabric dye? You can coordinate directly with the workshop on WhatsApp at <strong className="text-brand-burgundy font-semibold">{tailorPhoneDisplay}</strong> after sharing this recipe.
              </p>
            </div>
          </div>

          {/* Quotation Timeline */}
          <div className="bg-white border border-brand-border-pink p-6 rounded-3xl shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-brand-border-pink pb-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-burgundy">
                Atelier Quotation Timeline
              </h3>
              <span className="text-[10px] text-brand-pink font-bold font-mono">
                Workshop WhatsApp: {tailorPhoneDisplay}
              </span>
            </div>

            <div className="relative border-l border-brand-border-pink pl-6 ml-2.5 space-y-7">
              {/* Step 1 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-brand-burgundy text-white flex items-center justify-center text-[10px] font-bold">
                  1
                </span>
                <div>
                  <h4 className="text-xs font-bold text-brand-deep">Dispatch spec recipe on WhatsApp</h4>
                  <p className="text-[11px] text-brand-deep/60 leading-relaxed mt-1 font-sans font-medium">
                    Our master tailors at <span className="font-semibold text-brand-deep">{tailorPhoneDisplay}</span> receive your visual drape and full measurement configuration.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-brand-cream/40 text-brand-burgundy flex items-center justify-center text-[10px] font-bold border border-brand-border-pink">
                  2
                </span>
                <div>
                  <h4 className="text-xs font-bold text-brand-deep">Receive stitching quote</h4>
                  <p className="text-[11px] text-brand-deep/60 leading-relaxed mt-1 font-sans font-medium">
                    Within 15 minutes, you will receive a detailed labor quotation and delivery schedule directly in WhatsApp.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-brand-cream/40 text-brand-burgundy flex items-center justify-center text-[10px] font-bold border border-brand-border-pink">
                  3
                </span>
                <div>
                  <h4 className="text-xs font-bold text-brand-deep">Garment Hand-crafting & Delivery</h4>
                  <p className="text-[11px] text-brand-deep/60 leading-relaxed mt-1 font-sans font-medium">
                    Your fabric gets precision cut, hand-stitched, quality-checked, and delivered directly to your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-brand-border-pink">
        <span className="text-xs text-brand-deep/60 font-sans font-medium text-center sm:text-left">
          Want to customize a different garment silhouette? You can restart anytime.
        </span>
        <PrimaryButton
          onClick={handleRestart}
          variant="outline"
          iconName="refresh-cw"
          id="restart-designer-cta"
        >
          Restart Customizing
        </PrimaryButton>
      </div>

    </div>
  );
};

