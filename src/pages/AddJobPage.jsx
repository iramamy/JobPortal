import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import formSchema from "../components/FormValidation";

const AddJobPage = ({ addJobSubmit }) => {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    type: "Full-Time",
    location: "",
    description: "",
    companyName: "",
    salary: "Under $50K",
    companyDescription: "",
    companyEmail: "",
    companyContact: "",
  };

  const errorClass = "border rounded w-full py-2 px-3 border-red-700";
  const noErrorClass = "border rounded w-full py-2 px-3";

  const submitForm = (values) => {
    const newJob = {
      title: values.title,
      type: values.type,
      location: values.location,
      description: values.description,
      salary: values.salary,
      company: {
        name: values.companyName,
        description: values.companyDescription,
        contactEmail: values.companyEmail,
        contactPhone: values.companyContact,
      },
    };

    addJobSubmit(newJob);

    toast.success("New job added successfully!");

    return navigate("/jobs");
  };

  return (
    <section className="bg-indigo-50 mt-50 pt-8">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={formSchema}
          >
            {({ errors }) => (
              <Form>
                <h2 className="text-3xl text-center font-semibold mb-6">
                  Add Job
                </h2>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Type
                  </label>

                  <Field
                    as="select"
                    name="type"
                    className={errors.type ? errorClass : noErrorClass}
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </Field>
                  {errors.type && <small>{errors.type}</small>}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Job Listing Name
                  </label>

                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className={errors.title ? errorClass : noErrorClass}
                    placeholder="eg. Junior react developer..."
                  ></Field>
                  {errors.title && (
                    <small className="italic text-red-700">
                      {errors.title}
                    </small>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Description
                  </label>
                  <Field
                    as="textarea"
                    style={{ resize: "none" }}
                    id="description"
                    name="description"
                    className={errors.description ? errorClass : noErrorClass}
                    rows="4"
                    placeholder="Add any job duties, expectations, requirements, etc"
                  ></Field>
                  {errors.description && (
                    <small className="italic text-red-700">
                      {errors.description}
                    </small>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Salary
                  </label>
                  <Field
                    as="select"
                    id="salary"
                    name="salary"
                    className={errors.salary ? errorClass : noErrorClass}
                  >
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - 90K">$80K - $90K</option>
                    <option value="$90K - 100K">$90K - $100K</option>
                    <option value="$100K - 125K">$100K - $125K</option>
                    <option value="$125K - 150K">$125K - $150K</option>
                    <option value="$150K - 175K">$150K - $175K</option>
                    <option value="$175K - 200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </Field>
                  {errors.salary && (
                    <small className="italic text-red-700">
                      {errors.salary}
                    </small>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Location
                  </label>
                  <Field
                    type="text"
                    id="location"
                    name="location"
                    className={errors.location ? errorClass : noErrorClass}
                    placeholder="eg. Alabama..."
                  ></Field>
                  {errors.location && (
                    <small className="italic text-red-700">
                      {errors.location}
                    </small>
                  )}
                </div>

                <h3 className="text-2xl mb-5">Company Info</h3>

                <div className="mb-4">
                  <label
                    htmlFor="companyName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Company Name
                  </label>
                  <Field
                    type="text"
                    id="companyName"
                    name="companyName"
                    className={errors.companyName ? errorClass : noErrorClass}
                    placeholder="Company Name"
                  ></Field>
                  {errors.companyName && (
                    <small className="italic text-red-700">
                      {errors.companyName}
                    </small>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="companyDescription"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Company Description
                  </label>
                  <Field
                    as="textarea"
                    style={{ resize: "none" }}
                    id="companyDescription"
                    name="companyDescription"
                    className={
                      errors.companyDescription ? errorClass : noErrorClass
                    }
                    rows="4"
                    placeholder="What does your company do?"
                  ></Field>
                  {errors.companyDescription && (
                    <small className="italic text-red-700">
                      {errors.companyDescription}
                    </small>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="companyEmail"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Contact Email
                  </label>
                  <Field
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    className={errors.companyEmail ? errorClass : noErrorClass}
                    placeholder="Email address for applicants"
                  ></Field>
                  {errors.companyEmail && (
                    <small className="italic text-red-700">
                      {errors.companyEmail}
                    </small>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="companyContact"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Contact Phone
                  </label>
                  <Field
                    type="tel"
                    id="companyContact"
                    name="companyContact"
                    className={
                      errors.companyContact ? errorClass : noErrorClass
                    }
                    placeholder="Optional phone for applicants"
                  ></Field>
                  {errors.companyContact && (
                    <small className="italic text-red-700">
                      {errors.companyContact}
                    </small>
                  )}
                </div>

                <div>
                  <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add Job
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;
