import { ReactNode } from "react";

type Props = {
icon: ReactNode;
title: string;
description: string;
};

export default function FeatureCard({
icon,
title,
description,
}: Props) {
return ( <div className="rounded-3xl bg-white p-6 shadow-lg"> <div className="mb-4 text-sky-600">
{icon} </div>

  <h3 className="text-lg font-bold">
    {title}
  </h3>

  <p className="mt-2 text-gray-500">
    {description}
  </p>
</div>

);
}
