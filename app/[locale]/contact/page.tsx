"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
  const [touched, setTouched] = useState({ name: false, phone: false, message: false });

  // Регекс барои санҷиши формат: Ҳатман бояд бо + оғоз шавад ва танҳо рақамҳо бошанд (мисол: +992935555555)
  // Шаблон: + дар аввал ва аз 9 то 14 рақам паси он
  const phoneRegex = /^\+[1-9]\d{8,14}$/;

  // Функцияи санҷиши рақами Тоҷикистон (+992 ва 9 рақами дигар)
  // Агар танҳо рақами ТҶ лозим бошад, ин регексро истифода баред: /^\+992\d{9}$/
  const isPhoneValid = (num: string) => phoneRegex.test(num.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, message: true });

    // Агар рақам ё дигар майдонҳо хато бошанд, форма равон карда намешавад
    if (!name.trim() || !isPhoneValid(phone) || !message.trim()) return;

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone: phone.trim(), message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setMessage("");
        setTouched({ name: false, phone: false, message: false });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleBlur = (field: "name" | "phone" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const errors = {
    name: touched.name && !name.trim(),
    phone: touched.phone && (!phone.trim() || !isPhoneValid(phone)),
    message: touched.message && !message.trim(),
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-slate-50 to-slate-100/80 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-[#1e2d4a] tracking-tight">
            {t("title")}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xs mx-auto">
            {t("subtitle")}
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full pt-0.5" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 mt-8" noValidate>
          {/* ИНПУТИ НОМ */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700">
              {t("name")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
              required
              className={`rounded-xl border px-4 py-3 w-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-4 ${
                errors.name
                  ? "border-red-500 bg-red-50/30 focus:ring-red-100 focus:border-red-500"
                  : "border-slate-200 bg-slate-50/50 focus:ring-blue-100 focus:border-blue-500"
              }`}
              placeholder={t("name")}
            />
            {errors.name && (
              <p className="text-xs font-semibold text-red-500 flex items-center gap-1 animate-[slideDown_0.2s_ease-out]">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                {t("error_name_required") || "Лутфан, номи худро ворид кунед!"}
              </p>
            )}
          </div>

          {/* ИНПУТИ ТЕЛЕФОН (Бо валидатсияи +) */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700">
              {t("phone")}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                const val = e.target.value;
                // Барои осонӣ: агар корбар рақам навиштанро сар кунаду "+" нагузорад, автомат худмонда кунад
                if (val && !val.startsWith("+")) {
                  setPhone("+" + val);
                } else {
                  setPhone(val);
                }
              }}
              onBlur={() => handleBlur("phone")}
              required
              className={`rounded-xl border px-4 py-3 w-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-4 ${
                errors.phone
                  ? "border-red-500 bg-red-50/30 focus:ring-red-100 focus:border-red-500"
                  : "border-slate-200 bg-slate-50/50 focus:ring-blue-100 focus:border-blue-500"
              }`}
              placeholder="+992 93 555 5555"
              maxLength={16}
            />
            {errors.phone && (
              <p className="text-xs font-semibold text-red-500 flex items-center gap-1 animate-[slideDown_0.2s_ease-out]">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                {!phone.trim() 
                  ? (t("error_phone_required") || "Рақами телефонро нависед!") 
                  : (t("error_phone_format") || "Формат нодуруст аст! Намуна: +992XXXXXXXXX")}
              </p>
            )}
          </div>

          {/* ИНПУТИ ПАЁМ */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700">
              {t("message")}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => handleBlur("message")}
              required
              rows={4}
              className={`rounded-xl border px-4 py-3 w-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-4 resize-none ${
                errors.message
                  ? "border-red-500 bg-red-50/30 focus:ring-red-100 focus:border-red-500"
                  : "border-slate-200 bg-slate-50/50 focus:ring-blue-100 focus:border-blue-500"
              }`}
              placeholder={t("message")}
            />
            {errors.message && (
              <p className="text-xs font-semibold text-red-500 flex items-center gap-1 animate-[slideDown_0.2s_ease-out]">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                {t("error_message_required") || "Паёми худро ворид кунед!"}
              </p>
            )}
          </div>

          {/* Уведомления */}
          {status === "success" && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3.5 rounded-xl text-sm font-medium flex items-center gap-2 animate-[zoomIn_0.3s_ease-out]">
              <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>{t("success")}</span>
            </div>
          )}

          {status === "error" && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3.5 rounded-xl text-sm font-medium flex items-center gap-2 animate-[zoomIn_0.3s_ease-out]">
              <svg className="w-5 h-5 text-rose-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
              <span>{t("error")}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-500 shadow-md shadow-blue-600/10 active:scale-98 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>{t("sending") || "Дар ҳоли фиристодан..."}</span>
              </>
            ) : (
              t("send")
            )}
          </button>
        </form>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}