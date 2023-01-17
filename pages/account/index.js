import { useSession, signIn, signOut } from "next-auth/react";

export default function Account() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <main className="overflow-auto h-[calc(100vh-105px)] select-none max-md:h-[calc(100svh-70px-105px)]">
          <div className="flex p-3 flex-column">
            <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
              <div className="flex text-2xl flex-column">Account</div>
              Signed in as {session.user.email} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main className="overflow-auto h-[calc(100vh-105px)] select-none max-md:h-[calc(100svh-70px-105px)]">
        <div className="flex p-3 flex-column">
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
            <div className="flex text-2xl flex-column">Account</div>
            <>
              Not signed in <br />
              <button onClick={() => signIn("google")}>Sign in</button>
            </>
          </div>
        </div>
      </main>
    </>
  );
}
