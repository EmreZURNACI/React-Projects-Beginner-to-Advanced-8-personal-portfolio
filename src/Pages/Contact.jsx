import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeContext } from '../Contexts/ThemeCon';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../textCapitiliza.js';
const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mesaj: '',
      age: '',
      gender: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required("Gerekli"),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required("Gerekli"),
      age: Yup.string()
        .max(3, 'Must be 3 characters or less'),
      email: Yup.string().email('Invalid email address').required("Gerekli"),
      mesaj: Yup.string().required("Gerekli")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={"content-area contact " + (theme === "Light" ? " bg-light " : "bg-dark ")} >
      <Helmet>
        <title>{capitalize(t("Benimle İletişim"))}</title>
      </Helmet>
      <div className={theme === "Light" ? "w-100 h-100 bg-light row d-flex justify-content-center align-items-center m-0 flex-column" : "w-100 h-100 bg-dark row d-flex justify-content-center align-items-center m-0 flex-column"}>
        <div className='d-flex align-items-center justify-content-center mb-5 pb-5 flex-column'>
          <div className='col-7'> <h1 className={theme === "Light" ? "m-0 p-0 text-center  text-dark " : "m-0 p-0 text-center  text-light "}>
            {capitalize(t("Benimle İletişim"))}
          </h1></div>
          <form onSubmit={formik.handleSubmit} className={theme === "Light" ? " bg-light flex-column d-flex col-7" : " bg-dark flex-column d-flex col-7"}>


            <label htmlFor="firstName" className={theme === "Light" ? "text-text-dark fs-5 fw-bold" : "text-light fs-5 fw-bold"}>
              {capitalize(t("Ad"))}
            </label>
            <input
              className='form-control border-1 border border-secondary'
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className='text-danger'>{formik.errors.firstName}</div>
            ) : null}



            <label htmlFor="lastName" className={theme === "Light" ? "text-dark fs-5 fw-bold" : "text-light fs-5 fw-bold "}>
              {capitalize(t("Soyad"))}
            </label>
            <input
              className='form-control border-1 border border-secondary'
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className='text-danger'>{formik.errors.lastName}</div>
            ) : null}



            <label htmlFor="email" className={theme === "Light" ? "text-dark fs-5 fw-bold " : "text-light fs-5 fw-bold"}>
              Mail:
            </label>
            <input
              className='form-control border-1 border border-secondary'
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-danger'>{formik.errors.email}</div>
            ) : null}



            <label htmlFor="mesaj" className={theme === "Light" ? "text-dark fs-5 fw-bold " : "text-light fs-5 fw-bold"}>
              {capitalize(t("Mesajınız"))}
            </label>
            <textarea
              style={{ resize: "none" }}
              rows={4}
              className='form-control border-1 border border-secondary'
              id="mesaj"
              name="mesaj"
              type="mesaj"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mesaj}
            >
            </textarea>
            {formik.touched.mesaj && formik.errors.mesaj ? (
              <div className='text-danger'>{formik.errors.mesaj}</div>
            ) : null}



            <div>
              <label className={theme === "Light" ? "text-dark fs-5 fw-bold " : "text-light fs-5 fw-bold"}>
                {capitalize(t("Opsiyonel"))}
              </label>
              <div className='container mb-2 p-0'>
                <div className='row px-3 pb-3 pt-1 border-1 border-secondary border rounded-3'>

                  <div className='col-7'>
                    <label htmlFor="age" className={theme === "Light" ? "text-dark fs-5 fw-bold " : "text-light fs-5 fw-bold"}>
                      {capitalize(t("Yaşınız"))}
                    </label>
                    <input
                      className='form-control border-1 border border-secondary'
                      id="age"
                      name="age"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.age}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.age && formik.errors.age ? (
                      <div className='text-danger'>{formik.errors.age}</div>
                    ) : null}
                  </div>
                  <div className='col-7 d-flex flex-column justify-content-around'>
                    <label htmlFor="gender" className={theme === "Light" ? "text-dark fs-5 fw-bold pt-1" : "text-light fs-5 fw-bold pt-1"}>
                      {capitalize(t("Cinsiyet"))}
                    </label>
                    <div className='d-flex align-items-center justify-content-start gap-3'>
                      <label htmlFor="kadın" className={theme === "Light" ? "cursor-pointer fs-5 text-dark " : "  text-light fs-5 cursor-pointer "}>
                        <input
                          id="kadın"
                          name="gender"
                          type="radio"
                          onChange={formik.handleChange}
                          value="kadın"
                        />&nbsp; {capitalize(t("Kadın"))}
                      </label>
                      <label htmlFor="erkek" className={theme === "Light" ? "cursor-pointer fs-5 text-text-dark " : "text-light fs-5 cursor-pointer "}>
                        <input
                          id="erkek"
                          name="gender"
                          type="radio"
                          onChange={formik.handleChange}
                          value="erkek"
                        />&nbsp; {capitalize(t("Erkek"))}
                      </label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <button type="submit" disabled={!(formik.values.firstName && formik.values.lastName && formik.values.email.includes('@') && formik.values.mesaj)} className='btn btn-primary'>
              {capitalize(t("Kaydet"))}
            </button>
          </form>
        </div>
      </div >
    </div >
  );
};
export default Contact;