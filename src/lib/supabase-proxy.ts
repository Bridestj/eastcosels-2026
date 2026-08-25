import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value }) => {
              request.cookies.set(name, value);
            }
          );

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(
            ({ name, value, options }) => {
              response.cookies.set(
                name,
                value,
                options
              );
            }
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  /*
   * Protect the organizer area.
   */
  if (
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login" &&
    !user
  ) {
    const loginUrl = request.nextUrl.clone();

    loginUrl.pathname = "/admin/login";

    return NextResponse.redirect(loginUrl);
  }

  /*
   * If already logged in, don't show the login page.
   */
  if (
    pathname === "/admin/login" &&
    user
  ) {
    const adminUrl = request.nextUrl.clone();

    adminUrl.pathname = "/admin";

    return NextResponse.redirect(adminUrl);
  }

  return response;
}