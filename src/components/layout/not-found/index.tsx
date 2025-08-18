import { GoBackButton } from "@/components/layout/button/go-back-button"
import { Container } from "@/components/layout/container"
import { Typography } from "@/components/layout/typography"

type NotFoundProps = {
  title?: string
  description?: string
  labelGoBack?: string
}

export const NotFound = ({
  title = "This page does not exist",
  description = "The page you are looking for could not be found.",
  labelGoBack = "Go Back",
}: NotFoundProps) => {
  return (
    <section className="">
      <Container className="flex flex-col items-center justify-center gap-4 py-12 md:min-h-[48vh] md:py-20">
        <div className="font-extrabold text-7xl text-primary">404</div>

        <Typography.H1 className="text-center">{title}</Typography.H1>

        <Typography.Lead className="text-center">{description}</Typography.Lead>

        <GoBackButton>{labelGoBack}</GoBackButton>
      </Container>
    </section>
  )
}
