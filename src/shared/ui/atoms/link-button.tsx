'use client';

import { buttonVariants } from "../button";
import Link from "next/link";

export const LinkButton = ({ href, children, variant = 'outline' }: { href: string, children: React.ReactNode, variant?: 'outline' | 'default' }) => {
    return <Link className={buttonVariants({ variant })} href={href}>{children}</Link>
}