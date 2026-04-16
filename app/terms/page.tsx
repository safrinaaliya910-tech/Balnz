export default function TermsPage() {
  return (
    <div className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <h1 className="mb-8 text-4xl font-bold text-foreground">
          Terms of Service
        </h1>

        <div className="space-y-6 text-base leading-7 text-muted-foreground">

          <p>
            By accessing and using the BALNZ website, services, and programs, you agree to comply with and be bound by these Terms of Service. BALNZ provides this website as an informational and educational resource. While we strive to keep all information accurate and up to date, we do not guarantee the completeness, reliability, or accuracy of the content provided.
          </p>

          <p>
            The content available on this website, including health, fitness, and movement-related information, is intended for educational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment. You should always consult with a qualified healthcare professional before making decisions related to your health or beginning any exercise program.
          </p>

          <p>
            You acknowledge that participation in any fitness or movement program involves inherent risks. By engaging with BALNZ content, programs, or services, you accept full responsibility for your participation and any outcomes that may occur. BALNZ shall not be held liable for any injuries, damages, or losses resulting from the use of this website or participation in any program.
          </p>

          <p>
            You agree not to misuse the website or its content. All materials, including text, images, videos, and resources, are the intellectual property of BALNZ and are protected by copyright laws. Reproduction, distribution, or use of any content without prior written permission is strictly prohibited.
          </p>

          <p>
            BALNZ reserves the right to modify, update, or discontinue any part of the website or services at any time without prior notice. Continued use of the website constitutes acceptance of any changes made to these Terms.
          </p>

          <p>
            This website may include links to third-party websites for convenience. BALNZ does not endorse or take responsibility for the content, policies, or practices of external sites.
          </p>

          <p>
            The website and its content are provided “as is” without warranties of any kind, either express or implied, including but not limited to fitness for a particular purpose or non-infringement.
          </p>

          <p>
            By using this website, you agree that BALNZ is not responsible for any direct, indirect, incidental, or consequential damages arising from your use of the website or reliance on its content.
          </p>

        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} BALNZ. All rights reserved.
        </div>

      </div>
    </div>
  )
}