export default function PrivacyPage() {
  return (
    <div className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <h1 className="mb-8 text-4xl font-bold text-foreground">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-base leading-7 text-muted-foreground">

          <p>
            BALNZ values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you use our website and services.
          </p>

          <p>
            We may collect basic personal information such as your name, email address, and any information you voluntarily provide through forms, subscriptions, or contact requests. This information is used solely to improve user experience, provide requested services, and communicate relevant updates.
          </p>

          <p>
            BALNZ may also collect non-personal data such as browser type, device information, and website usage patterns. This information helps us understand how users interact with our website and allows us to improve functionality and content.
          </p>

          <p>
            We do not sell, trade, or rent your personal information to third parties. Your information is kept secure and used only for legitimate business and communication purposes.
          </p>

          <p>
            This website may use cookies or similar technologies to enhance user experience. You may choose to disable cookies through your browser settings, though some features of the website may not function properly.
          </p>

          <p>
            Our website may contain links to third-party websites. BALNZ is not responsible for the privacy practices or content of external sites. We encourage users to review the privacy policies of any third-party websites they visit.
          </p>

          <p>
            While we take reasonable measures to protect your information, no method of transmission over the internet is completely secure. Therefore, we cannot guarantee absolute security of your data.
          </p>

          <p>
            By using this website, you consent to the collection and use of information as outlined in this Privacy Policy. BALNZ reserves the right to update or modify this policy at any time.
          </p>

        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} BALNZ. All rights reserved.
        </div>

      </div>
    </div>
  )
}