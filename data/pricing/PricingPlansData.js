export const standard = [
	{
		plantitle: 'Standard',
		description: `For early-stage startups that want to spend more time developing and less on manual operations.`,
		monthly: 49,
		buttonText: 'Buy Standard',
		buttonClass: 'outline-primary',
		featureHeading: 'All core features, including',
		features: [
			{ feature: 'Only Basic Components' },
			{ feature: `<span class="fw-bold text-dark">12+ </span> Adv. Components` },
			{ feature: `<span class="fw-bold text-dark">5 - </span>Landing page` },
			{ feature: `<span class="fw-bold text-dark">3 </span>Dashboard Layouts` },
			{ feature: 'Documentation' },
			{ feature: 'Access to support forums' }
		]
	}
];

export const multisite = [
	{
		plantitle: 'Multisite',
		description: `For agile startups that want to grow their revenue with quick experiments and data-driven decision making.`,
		monthly: 149,
		buttonText: 'Buy Multisite',
		buttonClass: 'primary',
		featureHeading: 'Everything in Standard +:',
		features: [
			{ feature: 'Offline viewing' },
			{ feature: `<span class="fw-bold text-dark">Unlimited </span>projects` },
			{ feature: `<span class="fw-bold text-dark">Unlimited </span>storage` },
			{ feature: 'Custom domain support' },
			{ feature: 'Bulk editing' },
			{ feature: '12 / 5 support' }
		]
	}
];

export const extended = [
	{
		plantitle: 'Extended',
		description: `For fast-growth scaleups that want to grow by maximizing efficiencies in their revenue operations.`,
		monthly: 490,
		buttonText: 'Buy Extended',
		buttonClass: 'outline-primary',
		featureHeading: 'Everything in Multisite +',
		features: [
			{ feature: 'Workshop' },
			{ feature: `<span class="fw-bold text-dark">Dedicated  </span>hardware` },
			{
				feature: `<span class="fw-bold text-dark">99.9% uptime </span>guarantee`
			},
			{ feature: 'Advanced analytics' },
			{ feature: '3rd party integrations' },
			{ feature: '24 / 7 support' }
		]
	}
];

export const PricingPlansData = [standard, multisite, extended];

export default PricingPlansData;
