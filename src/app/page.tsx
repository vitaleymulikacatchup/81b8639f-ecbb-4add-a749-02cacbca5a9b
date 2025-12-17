"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroGlobeOverlay from '@/components/sections/hero/HeroGlobeOverlay';
import MediaGridAbout from '@/components/sections/about/MediaGridAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Crown, Gift, HelpCircle, Heart, Mail, Smile, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="noise"
      cardStyle="elevated-accent"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Child Life"
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroGlobeOverlay
          title="Inspiring Joy Through Play"
          description="Discover our carefully curated collection of toys that spark imagination, creativity, and learning for children of all ages."
          tag="Welcome to Child Life"
          tagIcon={Sparkles}
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
          ariaLabel="Hero section with globe and call to action"
        />
      </div>

      <div id="about" data-section="about">
        <MediaGridAbout
          title="Bringing Smiles to Every Home"
          description="Child Life started with a simple mission: to provide families with high-quality, safe, and engaging toys that inspire creativity and support child development. Each toy in our collection is hand-selected to ensure it meets our strict quality standards and brings genuine joy to children."
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908725790-8g99pim3.jpg",
              imageAlt: "Children playing with toys"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908726844-3vnjh71b.jpg",
              imageAlt: "Toy store display"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908727994-mft8jncw.jpg",
              imageAlt: "Happy children playing"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908729403-4jh4hh39.jpg",
              imageAlt: "Toy collection"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908730508-jcn1c9lk.jpg",
              imageAlt: "Family shopping experience"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908731451-068inc28.jpg",
              imageAlt: "Quality toys showcase"
            }
          ]}
          imagePosition="right"
          useInvertedBackground="noInvert"
          ariaLabel="About Child Life section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="How We Serve Your Family"
          description="Our commitment to quality and safety guides every step of our process"
          tag="Our Process"
          tagIcon={Zap}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              title: "Careful Curation",
              description: "Every toy is personally selected by our team of child development experts to ensure quality, safety, and educational value.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908732979-wjekrh0u.jpg",
              imageAlt: "Toy curation process"
            },
            {
              id: 2,
              title: "Safety First",
              description: "All products meet international safety standards and undergo rigorous testing to protect your children.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908734131-ky0v9nee.jpg",
              imageAlt: "Safety testing"
            },
            {
              id: 3,
              title: "Age-Appropriate Selection",
              description: "We organize toys by age groups to help you find the perfect match for your child's developmental stage.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908735490-26105ila.jpg",
              imageAlt: "Age-appropriate toys"
            }
          ]}
          ariaLabel="Features section"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Toys"
          description="Explore our most popular and highly-rated toys loved by families everywhere"
          tag="Best Sellers"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          products={[
            {
              id: "1",
              name: "Rainbow Wooden Blocks",
              price: "$24.99",
              variant: "Bright Colors - 50 Pieces",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908732979-wjekrh0u.jpg",
              imageAlt: "Wooden blocks set",
              isFavorited: false
            },
            {
              id: "2",
              name: "Educational Learning Puzzle",
              price: "$18.99",
              variant: "Numbers & Letters - Ages 3+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908734131-ky0v9nee.jpg",
              imageAlt: "Learning puzzle",
              isFavorited: false
            },
            {
              id: "3",
              name: "Adventure Toy Car Set",
              price: "$32.99",
              variant: "4 Different Models - Ages 2+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908735490-26105ila.jpg",
              imageAlt: "Toy car set",
              isFavorited: false
            },
            {
              id: "4",
              name: "Fashion Doll Collection",
              price: "$22.99",
              variant: "With Accessories - Ages 4+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908736672-y9u20gn0.jpg",
              imageAlt: "Fashion dolls",
              isFavorited: false
            },
            {
              id: "5",
              name: "Brain Building Puzzle Games",
              price: "$19.99",
              variant: "3 Difficulty Levels - Ages 5+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908737836-eug8qluy.jpg",
              imageAlt: "Puzzle games",
              isFavorited: false
            },
            {
              id: "6",
              name: "Outdoor Adventure Playset",
              price: "$45.99",
              variant: "Complete Setup - Ages 3+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908739066-b2z4cywp.jpg",
              imageAlt: "Outdoor toys",
              isFavorited: false
            }
          ]}
          ariaLabel="Featured products section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Parents Love"
          description="Real feedback from families who trust Child Life for their children's playtime"
          tag="Parent Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Mother of Two",
              company: "Happy Family",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908740502-sum6k32e.jpg",
              imageAlt: "Sarah Mitchell",
              content: "Child Life has been a game-changer for our family. The toys are not only fun but also educational. My kids love them and I feel confident in their quality and safety."
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Father",
              company: "Joy Homes",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908741794-1yhnqypm.jpg",
              imageAlt: "James Rodriguez",
              content: "The customer service is amazing and the toys are worth every penny. My daughter's creativity has flourished since we started shopping here."
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Parent Educator",
              company: "Learning Centers",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908742919-gcm3qgb2.jpg",
              imageAlt: "Emma Thompson",
              content: "As an educator, I appreciate how carefully curated their toy selection is. Each item supports child development in meaningful ways."
            },
            {
              id: "4",
              name: "Lisa Chen",
              role: "Mother",
              company: "Bright Kids",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908744853-it7np4z8.jpg",
              imageAlt: "Lisa Chen",
              content: "The VIP membership has saved us so much money. Free shipping and priority support make shopping here a breeze."
            },
            {
              id: "5",
              name: "David Park",
              role: "Father of Three",
              company: "Play & Learn",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908746197-3ri1ulpu.jpg",
              imageAlt: "David Park",
              content: "With three kids, I need toys that last. Child Life consistently delivers durable, safe products that keep my children engaged for hours."
            },
            {
              id: "6",
              name: "Anna Williams",
              role: "Grandparent",
              company: "Family First",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765908747323-f8xjz9tc.jpg",
              imageAlt: "Anna Williams",
              content: "As a grandmother, I love giving gifts that are both fun and educational. Child Life makes it easy to find the perfect toys for my grandchildren."
            }
          ]}
          ariaLabel="Parent testimonials section"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Membership Plans"
          description="Choose the plan that works best for your family and start saving on toys"
          tag="Special Offers"
          tagIcon={Gift}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          plans={[
            {
              id: "1",
              badge: "Starter",
              badgeIcon: Smile,
              price: "Free",
              name: "Starter Plan",
              buttons: [
                { text: "Get Started", href: "#contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Access to full catalog",
                "Standard shipping",
                "Basic customer support",
                "Monthly newsletter"
              ]
            },
            {
              id: "2",
              badge: "Family Plus",
              badgeIcon: Sparkles,
              price: "$9.99/mo",
              name: "Family Plus Plan",
              buttons: [
                { text: "Subscribe Now", href: "#contact" },
                { text: "Chat to Sales", href: "#" }
              ],
              features: [
                "10% discount on all items",
                "Free shipping on orders",
                "Priority customer support",
                "Early access to new toys",
                "Exclusive member deals"
              ]
            },
            {
              id: "3",
              badge: "VIP Club",
              badgeIcon: Crown,
              price: "$19.99/mo",
              name: "VIP Club Plan",
              buttons: [
                { text: "Join VIP", href: "#contact" },
                { text: "Chat to Sales", href: "#" }
              ],
              features: [
                "20% discount on all items",
                "Free shipping worldwide",
                "24/7 priority support",
                "Early access & exclusive items",
                "Birthday gift bonus",
                "Free returns & exchanges"
              ]
            }
          ]}
          ariaLabel="Membership pricing plans"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about Child Life and our products"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Are all toys safe for children?",
              content: "Yes, absolutely. All toys sold at Child Life meet international safety standards including ASTM F963 and CE certification. We conduct rigorous testing and inspection on every product before it reaches your home."
            },
            {
              id: "2",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all unused toys in original packaging. For VIP members, returns are extended to 60 days with free return shipping included."
            },
            {
              id: "3",
              title: "How do you choose which toys to sell?",
              content: "Our team of child development experts carefully selects each toy based on safety, educational value, durability, and age-appropriateness. We prioritize quality over quantity."
            },
            {
              id: "4",
              title: "Do you offer bulk discounts for schools?",
              content: "Yes! We provide special pricing for educational institutions, daycare centers, and group purchases. Contact our sales team at sales@childlife.com for a custom quote."
            },
            {
              id: "5",
              title: "How long does shipping take?",
              content: "Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 day delivery. Free shipping is included with Family Plus and VIP memberships."
            },
            {
              id: "6",
              title: "Can I track my order?",
              content: "Yes, you'll receive a tracking number via email as soon as your order ships. You can monitor your delivery status in real-time through your account dashboard."
            }
          ]}
          ariaLabel="Frequently asked questions"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Join Our Community"
          description="Subscribe to our newsletter and get exclusive updates on new toys, special offers, and parenting tips."
          tagIcon={Mail}
          useInvertedBackground="noInvert"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. You can unsubscribe at any time."
          ariaLabel="Newsletter signup section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Toys", href: "#products" },
                { label: "Best Sellers", href: "#products" },
                { label: "New Arrivals", href: "#" },
                { label: "Sale Items", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Mission", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Child Life | Bringing Joy Through Play"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}