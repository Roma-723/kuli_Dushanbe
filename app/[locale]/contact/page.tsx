"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#1e2d4a] text-center mb-2">
        {t("title")}
      </h1>
      <p className="text-gray-500 text-center mb-10">{t("subtitle")}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("name")}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-xl border border-gray-200 px-4 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("name")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("phone")}
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="rounded-xl border border-gray-200 px-4 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("phone")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("message")}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="rounded-xl border border-gray-200 px-4 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("message")}
          />
        </div>

        {status === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
            {t("success")}
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
            {t("error")}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "..." : t("send")}
        </button>
      </form>
    </div>
  );
}
