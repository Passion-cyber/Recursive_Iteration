import * as Yup from "yup";
import { useState } from "react";
import InputField from "./input";
import { Formik, Form } from "formik";
import emailjs from "@emailjs/browser";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import LoadingSpinner from "./loadingSpinner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const socials = [
    {
      icon: FiGithub,
      name: "GitHub",
      url: "https://github.com/Passion-cyber",
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ibelachi-franklyn/",
    },
    {
      icon: FaXTwitter,
      name: "Twitter",
      url: "https://x.com/Dede_edum",
    },
  ];

  const initialValues = {
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  };

  const validationSchema = Yup.object({
    user_name: Yup.string().required("Name field is required"),
    user_email: Yup.string().required("Email field is required"),
    user_subject: Yup.string().required(
      "Company name/Project topic field is required",
    ),
    user_message: Yup.string().required(
      "Project description field is required",
    ),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          username: values.user_name,
          useremail: values.user_email,
          projecttopic: values.user_subject,
          message: values.user_message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      resetForm();

      toast.success("Message sent successfully 🚀");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: "100px 0" }}>
      <div className="sec-wrap">
        <div className="rv" style={{ marginBottom: 48 }}>
          <span className="sec-num">05 / CONTACT</span>
          <h2 className="sec-title">
            Let's build
            <br />
            <em style={{ color: "var(--s)" }}>something</em>
            <br />
            remarkable.
          </h2>
        </div>

        <div className="w-full border border-red-500 contact-box rv td2">
          <div
            className="contact-glow"
            style={{ top: "-20%", right: "-10%" }}
          />
          <div
            className="contact-glow"
            style={{ bottom: "-30%", left: "-10%", opacity: 0.5 }}
          />

          <div
            className="w-full contact-cols"
            style={{
              display: "flex",
              gap: 72,
              alignItems: "flex-start",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Left */}
            <div className="w-full md:w-3/4">
              <p
                style={{
                  fontFamily: "var(--ff-m)",
                  fontSize: 11,
                  color: "var(--s)",
                  letterSpacing: ".14em",
                  marginBottom: 20,
                }}
              >
                GET IN TOUCH
              </p>
              <a
                href="mailto:ibelachichineduoffical@gmail.com"
                className="contact-email"
              >
                hello@ibelachichinedu
                <ArrowUpRight size={28} color="var(--s)" />
              </a>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--mw)",
                  lineHeight: 1.8,
                  marginTop: 24,
                  maxWidth: 380,
                }}
              >
                Open to full-time senior / staff roles, fractional CTO work, and
                select consulting. Response time is usually same day.
              </p>
              {/* Social Links */}
              <div style={{ display: "flex", gap: 10, marginTop: 32 }}>
                {socials.map(({ icon: Icon, name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title={name}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              {/* Availability indicator */}
              <div
                style={{
                  marginTop: 36,
                  padding: "16px 20px",
                  borderRadius: 8,
                  border: "1px solid rgba(34,197,94,0.2)",
                  background: "rgba(34,197,94,0.05)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span className="status-dot" />
                <span
                  style={{
                    fontFamily: "var(--ff-m)",
                    fontSize: 11,
                    color: "#86efac",
                    letterSpacing: ".06em",
                  }}
                >
                  Open to collaborations{" "}
                </span>
              </div>
            </div>

            {/* Right — Quick form */}
            <section className="w-full md:w-2/4">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
              >
                {({ values, setFieldValue, errors, touched }) => (
                  <Form>
                    <div
                      className="w-100"
                      style={{ flex: "0 0 360px", maxWidth: "100%" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 14,
                        }}
                      >
                        <InputField
                          name="user_name"
                          type="text"
                          placeholder="Your name"
                          onFocus={(e) =>
                            (e.target.style.borderColor =
                              "rgba(13,138,255,0.6)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(64,81,107,0.4)")
                          }
                          value={values.user_name}
                          onChange={(event) =>
                            setFieldValue("user_name", event.target.value)
                          }
                          error={errors.user_name}
                          touched={touched.user_name}
                        />
                        <InputField
                          name="user_email"
                          type="text"
                          placeholder="Your Email Address"
                          onFocus={(e) =>
                            (e.target.style.borderColor =
                              "rgba(13,138,255,0.6)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(64,81,107,0.4)")
                          }
                          value={values.user_email}
                          onChange={(event) =>
                            setFieldValue("user_email", event.target.value)
                          }
                          error={errors.user_email}
                          touched={touched.user_email}
                        />
                        <InputField
                          name="user_subject"
                          type="text"
                          placeholder="Company Name / Project Topic"
                          onFocus={(e) =>
                            (e.target.style.borderColor =
                              "rgba(13,138,255,0.6)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(64,81,107,0.4)")
                          }
                          value={values.user_subject}
                          onChange={(event) =>
                            setFieldValue("user_subject", event.target.value)
                          }
                          error={errors.user_subject}
                          touched={touched.user_subject}
                        />
                        <InputField
                          name="user_message"
                          type="textarea"
                          isTextarea={true}
                          placeholder="Enter a litte description about the project you have in mind"
                          onFocus={(e) =>
                            (e.target.style.borderColor =
                              "rgba(13,138,255,0.6)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(64,81,107,0.4)")
                          }
                          value={values.user_message}
                          onChange={(event) =>
                            setFieldValue("user_message", event.target.value)
                          }
                          error={errors.user_message}
                          touched={touched.user_message}
                        />

                        <button
                          type="submit"
                          className="btn btn-blue btn-md"
                          style={{ justifyContent: "center" }}
                        >
                          {loading ? (
                            <LoadingSpinner />
                          ) : (
                            <>
                              Send Message <ChevronRight size={14} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
