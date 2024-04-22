import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

function Breadcrumbs() {
  return (
    <Breadcrumb as="i" fontWeight="470" spacing="5px" separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink
          _hover={{ color: "blue.500" }}
          href="https://github.com"
          target="_blank"
        >
          Homepage
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          _hover={{ color: "blue.500" }}
          href="https://github.com/DeBOLx"
          target="_blank"
        >
          Overview
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          _hover={{ color: "blue.500" }}
          href="https://github.com/DeBOLx?tab=repositories"
          target="_blank"
        >
          Repositories
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          _hover={{ color: "blue.500" }}
          href="https://github.com/DeBOLx?tab=packages"
          target="_blank"
        >
          Packages
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
