import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Link from "next/link";
import Image from "next/image";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/icons/logo-full.svg"
              width={1000}
              height={1000}
              alt="CarePulse Logo"
              className="mb-12 h-10 w-fit"
            />
          </Link>

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient?.$id}
          />

          <p className="copyright mt-10 py-12">© 2024 CarePulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        width={1000}
        height={1000}
        alt="Appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
