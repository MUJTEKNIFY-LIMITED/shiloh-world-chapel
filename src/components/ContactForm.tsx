import { useState } from "react";

type FormState = {
  name: string;
  number: string;
  number2: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  number: "",
  number2: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    // require phone 1, phone 2 is optional
    if (!form.number.trim()) e.number = "Phone number is required";
    else if (!/^\+?[0-9\s()-]{7,}$/.test(form.number))
      e.number = "Enter a valid phone number";
    if (form.number2.trim() && !/^\+?[0-9\s()-]{7,}$/.test(form.number2))
      e.number2 = "Enter a valid phone number";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((s) => ({ ...s, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // TODO: replace with actual API call
      await new Promise((res) => setTimeout(res, 800));
      alert("Message sent — replace this with real submit logic.");
      setForm(initialState);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <label className="flex flex-col">
          <input
            type="text"
            value={form.name}
            placeholder="Name"
            onChange={handleChange("name")}
            className="w-[295px] h-[44px] rounded-[5px] px-[17px] py-[11px] bg-fifth text-fourth focus:outline-none focus:ring-2 focus:ring-primary"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="text-xs text-red-500 mt-1">
              {errors.name}
            </span>
          )}
        </label>

        <label className="flex flex-col">
          <input
            type="tel"
            value={form.number}
            placeholder="Phone 1"
            onChange={handleChange("number")}
            className="w-[295px] h-[44px] rounded-[5px] px-[17px] py-[11px] bg-fifth text-fourth focus:outline-none focus:ring-2 focus:ring-primary"
            aria-invalid={!!errors.number}
            aria-describedby={errors.number ? "number-error" : undefined}
          />
          {errors.number && (
            <span id="number-error" className="text-xs text-red-500 mt-1">
              {errors.number}
            </span>
          )}
        </label>

        <label className="flex flex-col">
          <input
            type="tel"
            value={form.number2}
            placeholder="Phone 2"
            onChange={handleChange("number2")}
            className="w-[295px] h-[44px] rounded-[5px] px-[17px] py-[11px] bg-fifth text-fourth focus:outline-none focus:ring-2 focus:ring-primary"
            aria-invalid={!!errors.number2}
            aria-describedby={errors.number2 ? "number2-error" : undefined}
          />
          {errors.number2 && (
            <span id="number2-error" className="text-xs text-red-500 mt-1">
              {errors.number2}
            </span>
          )}
        </label>

        <label className="flex flex-col">
          <input
            type="text"
            value={form.subject}
            placeholder="Subjects"
            onChange={handleChange("subject")}
            className="w-[295px] h-[44px] rounded-[5px] px-[17px] py-[11px] bg-fifth text-fourth focus:outline-none focus:ring-2 focus:ring-primary"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <span id="subject-error" className="text-xs text-red-500 mt-1">
              {errors.subject}
            </span>
          )}
        </label>
      </div>

      <label className="flex flex-col mt-5">
        <textarea
          value={form.message}
          placeholder="Message"
          onChange={handleChange("message")}
          rows={8}
          className="w-full h-[200px] rounded-[5px] px-[17px] py-[11px] bg-fifth text-fourth focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className="text-xs text-red-500 mt-1">
            {errors.message}
          </span>
        )}
      </label>

      <div className="mt-6">
        <button
          type="submit"
          disabled={submitting}
          className="flex items-center justify-center font-bold bg-primary text-white w-[162px] h-[51px] px-[29px] py-[20px] rounded-[33px] shadow-5xl disabled:opacity-60"
        >
          {submitting ? "Contacting..." : "Contact Now"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
