import React from "react";
import { useNav } from "../hooks/useNav";

export const TermsAndCondidions = () => {
	const termsRef = useNav("Terms");



	return (
		<section
			className="flex w-full h-screen max-[1070px]:mt-40 max-[690px]:mt-96"
			ref={termsRef}
			id="conditionsContainer"
		>
			<div className="h-3/4 w-8/12 m-auto text-center max-[560px]:w-full max-[690px]:mt-52">
				<div className="text-4xl text-coolGray-100">Terms and Conditions of Service</div>
				<div className="text-coolGray-100 mt-2">
					These terms and conditions ("Terms") govern your use of the mobile applications ("Apps") provided by Gorlami LLC ("Company"), a Software Development company registered in Georgia, USA. By downloading, installing, or using any of our Apps, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use our Apps.
				</div>
				<div className="text-coolGray-100">
					1. License
					a. Subject to these Terms, Company grants you a non-exclusive, non-transferable, limited license to download, install, and use the Apps solely for your personal, non-commercial purposes.
					b. You may not sublicense, sell, modify, reverse engineer, decompile, disassemble, or create derivative works of the Apps.
				</div>
				<div className="text-coolGray-100">
					2. Intellectual Property
					a. All intellectual property rights in the Apps and any related materials are owned by Company and/or its licensors.
					b. You may not use the Company's name, logo, or trademarks without prior written consent.
				</div>
				<div className="text-coolGray-100">
					3. User Content
					a. You may be able to submit content, such as reviews or comments, through the Apps. By submitting content, you grant Company a worldwide, royalty-free, perpetual, irrevocable, and sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such content.
					b. You represent and warrant that you own or have the necessary rights to submit any content you provide.
				</div>
				<div className="text-coolGray-100">
					4. Privacy
					a. Company's Privacy Policy, available at [link to privacy policy], explains how we collect, use, and disclose your personal information. By using our Apps, you consent to the collection, use, and disclosure of your personal information as described in the Privacy Policy.
				</div>
				<div className="text-coolGray-100">
					5. Third-Party Services
					a. Our Apps may contain links to third-party websites or services that are not owned or controlled by Company. We are not responsible for the content or privacy practices of any third-party websites or services. Your use of such third-party websites or services is at your own risk.
				</div>
				<div className="text-coolGray-100">
					6. Disclaimers
					a. Our Apps are provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied. Company disclaims all warranties, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
				</div>
				<div className="text-coolGray-100">
					7. Limitation of Liability
					a. In no event shall Company be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, damages for loss of profits, revenue, data, or use, incurred by you or any third party, whether in an action in contract or tort, arising from your use of or inability to use the Apps.
				</div>
				<div className="text-coolGray-100">
					8. Governing Law
					a. These Terms shall be governed by and construed in accordance with the laws of USA, without regard to its conflict of law provisions.
				</div>
				<div className="text-coolGray-100">
					9. Changes to Terms
					a. Company reserves the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
				</div>
				<div className="text-coolGray-100">
					10. Contact Us
					a. If you have any questions about these Terms, please contact us at gorlamillc@gmail.com.
				</div>
			</div>


		</section>
	);
};

export default TermsAndCondidions;
