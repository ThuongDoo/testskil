cong = {
  schema: {
    header: {
      type: "object",
      label: "header",
      fields: {
        logoImage: {
          type: "url",
          label: "logoImage",
        },
        logoImageAlt: {
          type: "text",
          label: "logoImageAlt",
        },
        navAboutLabel: {
          type: "text",
          label: "navAboutLabel",
        },
        navTourLabel: {
          type: "text",
          label: "navTourLabel",
        },
        navLocationsLabel: {
          type: "text",
          label: "navLocationsLabel",
        },
        navAppLabel: {
          type: "text",
          label: "navAppLabel",
        },
        navPricingLabel: {
          type: "text",
          label: "navPricingLabel",
        },
        trialCtaLabel: {
          type: "text",
          label: "trialCtaLabel",
        },
        trialCtaFullLabel: {
          type: "text",
          label: "trialCtaFullLabel",
        },
      },
      fieldOrder: [
        "logoImage",
        "logoImageAlt",
        "navAboutLabel",
        "navTourLabel",
        "navLocationsLabel",
        "navAppLabel",
        "navPricingLabel",
        "trialCtaLabel",
        "trialCtaFullLabel",
      ],
    },
    hero: {
      type: "object",
      label: "hero",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        titleWhite: {
          type: "text",
          label: "titleWhite",
        },
        titleHighlight: {
          type: "text",
          label: "titleHighlight",
        },
        subtitle: {
          type: "textarea",
          label: "subtitle",
        },
        image: {
          type: "url",
          label: "image",
        },
        imageAlt: {
          type: "text",
          label: "imageAlt",
        },
        primaryCtaLabel: {
          type: "text",
          label: "primaryCtaLabel",
        },
        secondaryCtaLabel: {
          type: "text",
          label: "secondaryCtaLabel",
        },
        stats: {
          type: "array",
          label: "stats",
          itemLabel: "stats",
          fields: {
            value: {
              type: "text",
              label: "value",
            },
            label: {
              type: "text",
              label: "label",
            },
          },
          emptyItem: {
            value: "",
            label: "",
          },
          fieldOrder: ["value", "label"],
        },
      },
      fieldOrder: [
        "eyebrow",
        "titleWhite",
        "titleHighlight",
        "subtitle",
        "image",
        "imageAlt",
        "primaryCtaLabel",
        "secondaryCtaLabel",
        "stats",
      ],
    },
    membership: {
      type: "object",
      label: "membership",
      fields: {
        plans: {
          type: "array",
          label: "plans",
          itemLabel: "plans",
          fields: {
            title: {
              type: "text",
              label: "title",
            },
            price: {
              type: "text",
              label: "price",
            },
            desc: {
              type: "text",
              label: "desc",
            },
            tag: {
              type: "text",
              label: "tag",
            },
            ctaLabel: {
              type: "text",
              label: "ctaLabel",
            },
          },
          emptyItem: {
            title: "",
            price: "",
            desc: "",
            tag: "",
            ctaLabel: "",
          },
          fieldOrder: ["title", "price", "desc", "tag", "ctaLabel"],
        },
      },
      fieldOrder: ["plans"],
    },
    about: {
      type: "object",
      label: "about",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        title: {
          type: "text",
          label: "title",
        },
        paragraphs: {
          type: "array",
          label: "paragraphs",
          itemLabel: "paragraphs",
          fields: {
            text: {
              type: "textarea",
              label: "text",
            },
          },
          emptyItem: {
            text: "",
          },
          fieldOrder: ["text"],
        },
        image: {
          type: "url",
          label: "image",
        },
        imageAlt: {
          type: "text",
          label: "imageAlt",
        },
        ctaLabel: {
          type: "text",
          label: "ctaLabel",
        },
      },
      fieldOrder: [
        "eyebrow",
        "title",
        "paragraphs",
        "image",
        "imageAlt",
        "ctaLabel",
      ],
    },
    training: {
      type: "object",
      label: "training",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        title: {
          type: "text",
          label: "title",
        },
        paragraphs: {
          type: "array",
          label: "paragraphs",
          itemLabel: "paragraphs",
          fields: {
            text: {
              type: "textarea",
              label: "text",
            },
          },
          emptyItem: {
            text: "",
          },
          fieldOrder: ["text"],
        },
        bullets: {
          type: "array",
          label: "bullets",
          itemLabel: "bullets",
          fields: {
            text: {
              type: "text",
              label: "text",
            },
          },
          emptyItem: {
            text: "",
          },
          fieldOrder: ["text"],
        },
        image: {
          type: "url",
          label: "image",
        },
        imageAlt: {
          type: "text",
          label: "imageAlt",
        },
        ctaLabel: {
          type: "text",
          label: "ctaLabel",
        },
      },
      fieldOrder: [
        "eyebrow",
        "title",
        "paragraphs",
        "bullets",
        "image",
        "imageAlt",
        "ctaLabel",
      ],
    },
    referral: {
      type: "object",
      label: "referral",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        title: {
          type: "text",
          label: "title",
        },
        paragraphs: {
          type: "array",
          label: "paragraphs",
          itemLabel: "paragraphs",
          fields: {
            text: {
              type: "textarea",
              label: "text",
            },
          },
          emptyItem: {
            text: "",
          },
          fieldOrder: ["text"],
        },
        image: {
          type: "url",
          label: "image",
        },
        imageAlt: {
          type: "text",
          label: "imageAlt",
        },
        ctaLabel: {
          type: "text",
          label: "ctaLabel",
        },
      },
      fieldOrder: [
        "eyebrow",
        "title",
        "paragraphs",
        "image",
        "imageAlt",
        "ctaLabel",
      ],
    },
    gymTour: {
      type: "object",
      label: "gymTour",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        title: {
          type: "text",
          label: "title",
        },
        subtitle: {
          type: "textarea",
          label: "subtitle",
        },
        photos: {
          type: "array",
          label: "photos",
          itemLabel: "photos",
          fields: {
            seed: {
              type: "text",
              label: "seed",
            },
            label: {
              type: "text",
              label: "label",
            },
          },
          emptyItem: {
            seed: "",
            label: "",
          },
          fieldOrder: ["seed", "label"],
        },
      },
      fieldOrder: ["eyebrow", "title", "subtitle", "photos"],
    },
    gymSystem: {
      type: "object",
      label: "gymSystem",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        title: {
          type: "text",
          label: "title",
        },
        subtitle: {
          type: "textarea",
          label: "subtitle",
        },
        cities: {
          type: "array",
          label: "cities",
          itemLabel: "cities",
          fields: {
            name: {
              type: "text",
              label: "name",
            },
            count: {
              type: "number",
              label: "count",
            },
            branches: {
              type: "textarea",
              label: "branches",
            },
          },
          emptyItem: {
            name: "",
            count: null,
            branches: "",
          },
          fieldOrder: ["name", "count", "branches"],
        },
      },
      fieldOrder: ["eyebrow", "title", "subtitle", "cities"],
    },
    appPromo: {
      type: "object",
      label: "appPromo",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        title: {
          type: "text",
          label: "title",
        },
        text: {
          type: "textarea",
          label: "text",
        },
        image: {
          type: "url",
          label: "image",
        },
        imageAlt: {
          type: "text",
          label: "imageAlt",
        },
        features: {
          type: "array",
          label: "features",
          itemLabel: "features",
          fields: {
            text: {
              type: "text",
              label: "text",
            },
          },
          emptyItem: {
            text: "",
          },
          fieldOrder: ["text"],
        },
        stores: {
          type: "array",
          label: "stores",
          itemLabel: "stores",
          fields: {
            label: {
              type: "text",
              label: "label",
            },
            href: {
              type: "text",
              label: "href",
            },
          },
          emptyItem: {
            label: "",
            href: "",
          },
          fieldOrder: ["label", "href"],
        },
      },
      fieldOrder: [
        "eyebrow",
        "title",
        "text",
        "image",
        "imageAlt",
        "features",
        "stores",
      ],
    },
    pricing: {
      type: "object",
      label: "pricing",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        title: {
          type: "text",
          label: "title",
        },
        subtitle: {
          type: "text",
          label: "subtitle",
        },
        plans: {
          type: "array",
          label: "plans",
          itemLabel: "plans",
          fields: {
            name: {
              type: "text",
              label: "name",
            },
            price: {
              type: "text",
              label: "price",
            },
            period: {
              type: "text",
              label: "period",
            },
            note: {
              type: "text",
              label: "note",
            },
            features: {
              type: "textarea",
              label: "features",
            },
            highlight: {
              type: "boolean",
              label: "highlight",
            },
            badge: {
              type: "text",
              label: "badge",
            },
            ctaLabel: {
              type: "text",
              label: "ctaLabel",
            },
          },
          emptyItem: {
            name: "",
            price: "",
            period: "",
            note: "",
            features: "",
            highlight: false,
            badge: "",
            ctaLabel: "",
          },
          fieldOrder: [
            "name",
            "price",
            "period",
            "note",
            "features",
            "highlight",
            "badge",
            "ctaLabel",
          ],
        },
      },
      fieldOrder: ["eyebrow", "title", "subtitle", "plans"],
    },
    features: {
      type: "object",
      label: "features",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        title: {
          type: "text",
          label: "title",
        },
        items: {
          type: "array",
          label: "items",
          itemLabel: "items",
          fields: {
            iconImage: {
              type: "url",
              label: "iconImage",
            },
            iconAlt: {
              type: "text",
              label: "iconAlt",
            },
            title: {
              type: "text",
              label: "title",
            },
            desc: {
              type: "text",
              label: "desc",
            },
          },
          emptyItem: {
            iconImage: "",
            iconAlt: "",
            title: "",
            desc: "",
          },
          fieldOrder: ["iconImage", "iconAlt", "title", "desc"],
        },
      },
      fieldOrder: ["eyebrow", "title", "items"],
    },
    registerCta: {
      type: "object",
      label: "registerCta",
      fields: {
        eyebrow: {
          type: "text",
          label: "eyebrow",
        },
        title: {
          type: "text",
          label: "title",
        },
        subtitle: {
          type: "textarea",
          label: "subtitle",
        },
        phoneNumber: {
          type: "text",
          label: "phoneNumber",
        },
        phoneHref: {
          type: "text",
          label: "phoneHref",
        },
        phoneNote: {
          type: "text",
          label: "phoneNote",
        },
        contactLinks: {
          type: "array",
          label: "contactLinks",
          itemLabel: "contactLinks",
          fields: {
            label: {
              type: "text",
              label: "label",
            },
            href: {
              type: "url",
              label: "href",
            },
          },
          emptyItem: {
            label: "",
            href: "",
          },
          fieldOrder: ["label", "href"],
        },
      },
      fieldOrder: [
        "eyebrow",
        "title",
        "subtitle",
        "phoneNumber",
        "phoneHref",
        "phoneNote",
        "contactLinks",
      ],
    },
    footer: {
      type: "object",
      label: "footer",
      fields: {
        logoImage: {
          type: "url",
          label: "logoImage",
        },
        logoImageAlt: {
          type: "text",
          label: "logoImageAlt",
        },
        tagline: {
          type: "text",
          label: "tagline",
        },
        socials: {
          type: "array",
          label: "socials",
          itemLabel: "socials",
          fields: {
            label: {
              type: "text",
              label: "label",
            },
            icon: {
              type: "text",
              label: "icon",
            },
            href: {
              type: "text",
              label: "href",
            },
          },
          emptyItem: {
            label: "",
            icon: "",
            href: "",
          },
          fieldOrder: ["label", "icon", "href"],
        },
        columns: {
          type: "array",
          label: "columns",
          itemLabel: "columns",
          fields: {
            title: {
              type: "text",
              label: "title",
            },
            links: {
              type: "text",
              label: "links",
            },
          },
          emptyItem: {
            title: "",
            links: "",
          },
          fieldOrder: ["title", "links"],
        },
        storesTitle: {
          type: "text",
          label: "storesTitle",
        },
        stores: {
          type: "array",
          label: "stores",
          itemLabel: "stores",
          fields: {
            label: {
              type: "text",
              label: "label",
            },
            href: {
              type: "text",
              label: "href",
            },
          },
          emptyItem: {
            label: "",
            href: "",
          },
          fieldOrder: ["label", "href"],
        },
        copyright: {
          type: "text",
          label: "copyright",
        },
      },
      fieldOrder: [
        "logoImage",
        "logoImageAlt",
        "tagline",
        "socials",
        "columns",
        "storesTitle",
        "stores",
        "copyright",
      ],
    },
  },
  sectionOrder: [
    "header",
    "hero",
    "membership",
    "about",
    "training",
    "referral",
    "gymTour",
    "gymSystem",
    "appPromo",
    "pricing",
    "features",
    "registerCta",
    "footer",
  ],
  themes: {},
  defaultData: {
    header: {
      logoImage: "https://picsum.photos/seed/thenewgym-logo/240/64",
      logoImageAlt: "The New Gym",
      navAboutLabel: "Giới thiệu",
      navTourLabel: "Cơ sở vật chất",
      navLocationsLabel: "Tìm phòng tập",
      navAppLabel: "App The New Gym",
      navPricingLabel: "Bảng giá hội viên",
      trialCtaLabel: "Trải nghiệm 7 ngày",
      trialCtaFullLabel: "Trải nghiệm miễn phí 7 ngày",
    },
    hero: {
      eyebrow: "The New Gym",
      titleWhite: "GYM CHO",
      titleHighlight: "MỌI NGƯỜI",
      subtitle:
        "Không gian tập luyện hiện đại, thoải mái, không phán xét. Chỉ từ 299.000đ/tháng — tập luyện không giới hạn, 24/7.",
      image: "https://picsum.photos/seed/thenewgym-hero/1920/1080",
      imageAlt: "Phòng tập The New Gym",
      primaryCtaLabel: "Đăng ký ngay",
      secondaryCtaLabel: "Xem bảng giá",
      stats: [
        {
          value: "15+",
          label: "Phòng tập",
        },
        {
          value: "24/7",
          label: "Hoạt động",
        },
        {
          value: "299K",
          label: "Từ mỗi tháng",
        },
      ],
    },
    membership: {
      plans: [
        {
          title: "Toàn hệ thống",
          price: "399.000",
          desc: "Tập tại tất cả các chi nhánh The New Gym trên toàn quốc.",
          tag: "Linh hoạt nhất",
          ctaLabel: "Chọn gói này",
        },
        {
          title: "1 chi nhánh",
          price: "299.000",
          desc: "Tập không giới hạn tại 1 chi nhánh bạn chọn, gần nơi bạn sống.",
          tag: "Tiết kiệm nhất",
          ctaLabel: "Chọn gói này",
        },
      ],
    },
    about: {
      eyebrow: "Về The New Gym",
      title: "Không gian tập luyện thoải mái, không phán xét",
      paragraphs: [
        {
          text: "Chúng tôi tạo ra một môi trường nơi ai cũng có thể tập luyện một cách tự tin — dù bạn là người mới bắt đầu hay đã tập lâu năm — mà không cần lo lắng về ánh nhìn của người khác.",
        },
        {
          text: "The New Gym hướng đến một cộng đồng tập luyện lành mạnh, thân thiện và dễ tiếp cận với mọi mức chi phí.",
        },
      ],
      image: "https://picsum.photos/seed/thenewgym-about/900/700",
      imageAlt: "Không gian phòng tập The New Gym",
      ctaLabel: "Khám phá phòng tập",
    },
    training: {
      eyebrow: "Hướng dẫn tập luyện miễn phí",
      title: "Tập đúng kỹ thuật, an toàn ngay từ ngày đầu",
      paragraphs: [
        {
          text: "Video hướng dẫn bài tập ngay trong ứng dụng cùng đội ngũ huấn luyện viên luôn sẵn sàng hỗ trợ bạn sử dụng thiết bị đúng cách.",
        },
      ],
      bullets: [
        {
          text: "Video hướng dẫn từng bài tập trong app",
        },
        {
          text: "HLV hỗ trợ trực tiếp tại phòng tập",
        },
        {
          text: "Lộ trình tập luyện theo mục tiêu cá nhân",
        },
      ],
      image: "https://picsum.photos/seed/thenewgym-training/900/700",
      imageAlt: "Hướng dẫn tập luyện tại The New Gym",
      ctaLabel: "Xem trong app",
    },
    referral: {
      eyebrow: "Thêm bạn, thêm vui",
      title: "Rủ bạn tập cùng, nhận ngay ưu đãi",
      paragraphs: [
        {
          text: "Giới thiệu bạn bè đăng ký thành công gói Toàn hệ thống, cả bạn và người được giới thiệu đều nhận 2 tuần tập luyện miễn phí.",
        },
      ],
      image: "https://picsum.photos/seed/thenewgym-referral/900/700",
      imageAlt: "Chương trình giới thiệu bạn bè",
      ctaLabel: "Giới thiệu ngay",
    },
    gymTour: {
      eyebrow: "Cơ sở vật chất",
      title: "Tham quan phòng tập",
      subtitle:
        "Không gian rộng rãi, trang thiết bị hiện đại, hoạt động 24/7 — sẵn sàng cho mọi mục tiêu tập luyện của bạn.",
      photos: [
        {
          seed: "gym-tour-1",
          label: "Khu tập tạ tự do",
        },
        {
          seed: "gym-tour-2",
          label: "Khu cardio",
        },
        {
          seed: "gym-tour-3",
          label: "Khu máy tập",
        },
        {
          seed: "gym-tour-4",
          label: "Khu giãn cơ",
        },
        {
          seed: "gym-tour-5",
          label: "Phòng thay đồ",
        },
        {
          seed: "gym-tour-6",
          label: "Quầy lễ tân",
        },
      ],
    },
    gymSystem: {
      eyebrow: "Hệ thống phòng tập",
      title: "Hơn 15 phòng tập trên toàn quốc",
      subtitle:
        "Một thẻ hội viên, tập luyện tại bất kỳ chi nhánh nào trong hệ thống với gói Toàn hệ thống.",
      cities: [
        {
          name: "TP. Hồ Chí Minh",
          count: 12,
          branches:
            "Lê Hồng Phong, Lý Thường Kiệt, Nam Kỳ Khởi Nghĩa, Quang Trung, Phan Đăng Lưu, Điện Biên Phủ, Ung Văn Khiêm, Hậu Giang, Âu Cơ, Nguyễn Chí Thanh, Nguyễn Thị Thập, Cộng Hòa",
        },
        {
          name: "Đồng Nai",
          count: 1,
          branches: "Biên Hòa",
        },
        {
          name: "Cần Thơ",
          count: 1,
          branches: "Ninh Kiều",
        },
        {
          name: "Đà Nẵng",
          count: 1,
          branches: "Hải Châu",
        },
      ],
    },
    appPromo: {
      eyebrow: "The New Gym App",
      title: "Cả phòng gym trong lòng bàn tay bạn",
      text: "Đặt lịch, mở khoá cửa, theo dõi tiến độ và quản lý gói tập — tất cả chỉ trong một ứng dụng.",
      image: "https://picsum.photos/seed/thenewgym-app/480/960",
      imageAlt: "Ứng dụng The New Gym",
      features: [
        {
          text: "Ra vào phòng tập 24/7 bằng mã QR",
        },
        {
          text: "Đặt lịch lớp học nhóm miễn phí",
        },
        {
          text: "Theo dõi tiến độ và lịch sử tập luyện",
        },
        {
          text: "Quản lý hội viên, gia hạn, nâng cấp gói",
        },
      ],
      stores: [
        {
          label: "▶ Google Play",
          href: "#",
        },
        {
          label: " App Store",
          href: "#",
        },
      ],
    },
    pricing: {
      eyebrow: "Bảng giá hội viên",
      title: "Chọn gói tập phù hợp với bạn",
      subtitle:
        "Không phí ẩn, không ràng buộc dài hạn. Huỷ hoặc đổi gói bất cứ lúc nào.",
      plans: [
        {
          name: "1 tháng — 1 chi nhánh",
          price: "299.000",
          period: "đ / tháng",
          note: "Thanh toán hàng tháng",
          features:
            "Tập tại 1 chi nhánh bạn chọn, Không giới hạn số lần tập, Hoạt động 24/7, Lớp học nhóm miễn phí",
          highlight: false,
          badge: "",
          ctaLabel: "Đăng ký ngay",
        },
        {
          name: "1 tháng — Toàn hệ thống",
          price: "399.000",
          period: "đ / tháng",
          note: "Thanh toán hàng tháng",
          features:
            "Tập tại tất cả chi nhánh, Không giới hạn số lần tập, Hoạt động 24/7, Lớp học nhóm miễn phí, Hỗ trợ đổi chi nhánh linh hoạt",
          highlight: true,
          badge: "⭐ Phổ biến nhất",
          ctaLabel: "Đăng ký ngay",
        },
        {
          name: "6 tháng — Toàn hệ thống",
          price: "299.000",
          period: "đ / tháng",
          note: "Trả trước 6 tháng, hỗ trợ trả góp 0%",
          features:
            "Tập tại tất cả chi nhánh, Tiết kiệm hơn 25% so với gói tháng, Không giới hạn số lần tập, Hoạt động 24/7, Ưu tiên đặt lịch lớp học",
          highlight: false,
          badge: "",
          ctaLabel: "Đăng ký ngay",
        },
      ],
    },
    features: {
      eyebrow: "Vì sao chọn The New Gym",
      title: "Tiện ích dành cho mọi hội viên",
      items: [
        {
          iconImage: "https://picsum.photos/seed/thenewgym-feature-1/80/80",
          iconAlt: "Thiết bị đa dạng, hiện đại",
          title: "Thiết bị đa dạng, hiện đại",
          desc: "Đầy đủ máy tập, tạ tự do, khu cardio cho mọi mục tiêu.",
        },
        {
          iconImage: "https://picsum.photos/seed/thenewgym-feature-2/80/80",
          iconAlt: "Hoạt động 24/7",
          title: "Hoạt động 24/7",
          desc: "Tập luyện bất cứ khi nào phù hợp với lịch trình của bạn.",
        },
        {
          iconImage: "https://picsum.photos/seed/thenewgym-feature-3/80/80",
          iconAlt: "Lớp học nhóm miễn phí",
          title: "Lớp học nhóm miễn phí",
          desc: "Yoga, Zumba, HIIT... đa dạng lớp học mỗi tuần.",
        },
        {
          iconImage: "https://picsum.photos/seed/thenewgym-feature-4/80/80",
          iconAlt: "Wifi, nước uống, chỗ để xe",
          title: "Wifi, nước uống, chỗ để xe",
          desc: "Tiện ích miễn phí giúp buổi tập thoải mái hơn.",
        },
        {
          iconImage: "https://picsum.photos/seed/thenewgym-feature-5/80/80",
          iconAlt: "Khám sức khoẻ & tư vấn dáng",
          title: "Khám sức khoẻ & tư vấn dáng",
          desc: "Đánh giá thể trạng và tư thế trước khi bắt đầu.",
        },
        {
          iconImage: "https://picsum.photos/seed/thenewgym-feature-6/80/80",
          iconAlt: "HLV chuyên nghiệp hỗ trợ",
          title: "HLV chuyên nghiệp hỗ trợ",
          desc: "Hướng dẫn kỹ thuật đúng, an toàn khi sử dụng thiết bị.",
        },
      ],
    },
    registerCta: {
      eyebrow: "Trải nghiệm miễn phí",
      title: "Đăng ký tập thử 7 ngày miễn phí",
      subtitle:
        "Liên hệ ngay với The New Gym qua Messenger, Zalo, Instagram, TikTok hoặc gọi điện trực tiếp — đội ngũ tư vấn sẽ hỗ trợ bạn trong thời gian sớm nhất.",
      phoneNumber: "0123 456 789",
      phoneHref: "tel:0123456789",
      phoneNote: "Gọi ngay để được tư vấn",
      contactLinks: [
        {
          label: "Messenger",
          href: "https://m.me/thenewgym",
        },
        {
          label: "Zalo",
          href: "https://zalo.me/thenewgym",
        },
        {
          label: "Instagram",
          href: "https://instagram.com/thenewgym",
        },
        {
          label: "TikTok",
          href: "https://tiktok.com/@thenewgym",
        },
      ],
    },
    footer: {
      logoImage: "https://picsum.photos/seed/thenewgym-logo-light/240/64",
      logoImageAlt: "The New Gym",
      tagline: "Gym cho mọi người. Không phán xét, không giới hạn.",
      socials: [
        {
          label: "Facebook",
          icon: "f",
          href: "#",
        },
        {
          label: "Instagram",
          icon: "◎",
          href: "#",
        },
        {
          label: "TikTok",
          icon: "♪",
          href: "#",
        },
        {
          label: "YouTube",
          icon: "▶",
          href: "#",
        },
      ],
      columns: [
        {
          title: "Về chúng tôi",
          links: "Giới thiệu, Hệ thống phòng tập, Tin tức, Tuyển dụng, Liên hệ",
        },
        {
          title: "Chính sách",
          links: "Chính sách bảo mật, Điều khoản sử dụng, Chăm sóc khách hàng",
        },
      ],
      storesTitle: "Tải ứng dụng",
      stores: [
        {
          label: "▶ Google Play",
          href: "#",
        },
        {
          label: " App Store",
          href: "#",
        },
      ],
      copyright: "© 2026 The New Gym. All rights reserved.",
    },
  },
};
