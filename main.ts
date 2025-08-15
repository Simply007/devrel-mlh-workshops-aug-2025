/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NodgNARATAdCMAYKQCxQKwoSgHDgjAGz4CcI6e+IUJOIAzIdTiQvgulFV4chAKYA7ZAjDB8YUVMlh8AXUgAjRYUYoQEOUA==
 */

import {
    AutoLink,
    Autosave,
    Bold,
    ClassicEditor,
    EditorConfig,
    Emoji,
    Essentials,
    Heading,
    ImageCaption,
    Image,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    Italic,
    Link,
    Mention,
    Paragraph,
    MentionFeedObjectItem,
    ModelElement,
    ImageInsert,
    LinkImage,
    Editor
} from 'ckeditor5';
import {
    Template
} from 'ckeditor5-premium-features';

// @ts-ignore: CKEditorInspector is not typed yet
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import './style.css';

// @ts-expect-error ts(2339)
const LICENSE_KEY = import.meta.env.VITE_CKEDITOR5_LICENSE_KEY;
if (!LICENSE_KEY) {
    throw new Error('Missing CKEditor 5 license key');
}

const editorConfig: EditorConfig = {
    toolbar: {
        items: ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', '|', 'emoji', 'link', 'insertTemplate', 'insertImage'],
        shouldNotGroupWhenFull: true
    },
    plugins: [AutoLink, Autosave, Bold, Emoji, Essentials, Italic, Link, Mention, Paragraph, Template, Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, LinkImage, ImageInsert, Heading, MentionCustomization],
    initialData:
        '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
    licenseKey: LICENSE_KEY,
    link: {
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://',
        decorators: {
            toggleDownloadable: {
                mode: 'manual',
                label: 'Downloadable',
                attributes: {
                    download: 'file'
                }
            }
        }
    },
    heading: {
        options: [
            {
                model: 'paragraph',
                title: 'Paragraph',
                class: 'ck-heading_paragraph'
            },
            {
                model: 'heading1',
                view: 'h1',
                title: 'Heading 1',
                class: 'ck-heading_heading1'
            },
            {
                model: 'heading2',
                view: 'h2',
                title: 'Heading 2',
                class: 'ck-heading_heading2'
            },
            {
                model: 'heading3',
                view: 'h3',
                title: 'Heading 3',
                class: 'ck-heading_heading3'
            },
            {
                model: 'heading4',
                view: 'h4',
                title: 'Heading 4',
                class: 'ck-heading_heading4'
            },
            {
                model: 'heading5',
                view: 'h5',
                title: 'Heading 5',
                class: 'ck-heading_heading5'
            },
            {
                model: 'heading6',
                view: 'h6',
                title: 'Heading 6',
                class: 'ck-heading_heading6'
            }
        ]
    },
    image: {
        resizeOptions: [
            {
                name: 'resizeImage:original',
                label: 'Default image width',
                value: null
            },
            {
                name: 'resizeImage:50',
                label: '50% page width',
                value: '50'
            },
            {
                name: 'resizeImage:75',
                label: '75% page width',
                value: '75'
            }
        ],
        toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            '|',
            'imageStyle:inline',
            'imageStyle:wrapText',
            'imageStyle:breakText',
            '|',
            'resizeImage'
        ],
        insert: {
            integrations: ['url']
        }
    },
    mention: {
        feeds: [
            {
                marker: '@',
                minimumCharacters: 2,
                feed: async (searchString: string) => {
                    if (!searchString) {
                        return [];
                    }

                    const url = `https://api.github.com/search/users?q=${encodeURIComponent(searchString)}%20in:login&per_page=10`;

                    const res = await fetch(url, {
                        headers: {
                            // @ts-expect-error ts(2339)
                            "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
                        }
                    });
                    const json = await res.json();

                    const items: MentionFeedObjectItem[] = json.items.map((u: any) => ({
                        id: `@${u.id}`,
                        text: `@${u.login}`,
                    }));
                    return items;
                },
                itemRenderer: (item: MentionFeedObjectItem) => {
                    const li = document.createElement('li');
                    li.classList.add('mention-item');
                    li.style.display = 'flex';
                    li.style.alignItems = 'center';
                    li.style.padding = '6px 10px';
                    li.style.cursor = 'pointer';
                    li.style.gap = '8px';

                    const img = document.createElement('img');
                    img.src = `https://avatars.githubusercontent.com/u/${item.id.substring(1)}?v=4`;
                    img.width = 28;
                    img.height = 28;
                    img.style.width = '28px';
                    img.style.height = '28px';
                    img.style.objectFit = 'cover';
                    img.style.borderRadius = '50%';
                    img.style.marginRight = '8px';
                    img.style.boxShadow = '0 1px 4px rgba(0,0,0,0.07)';
                    li.appendChild(img);

                    const text = document.createElement('span');
                    text.textContent = item.text || "N/A";
                    text.style.fontWeight = '500';
                    text.style.fontSize = '15px';
                    li.appendChild(text);

                    return li;
                },
            }
        ]
    },
    placeholder: 'Type or paste your content here!',
    template: {
        definitions: [
            {
                title: 'CKEditor document',
                description: 'Document template',
                icon: `<svg width="60" height="60" viewBox="0 0 258 285" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M181.115 165.76C181.29 165.883 181.416 166.063 181.473 166.27C181.415 166.064 181.289 165.883 181.115 165.76Z" fill="#141A25" /><path d="M177.585 196.006C171.185 196.806 165.018 198.922 159.466 202.223C152.691 206.15 147.002 211.721 142.919 218.43C141.637 220.577 134.464 234.434 134.464 234.434L109.783 279.811L110.044 279.995C111.192 280.744 112.411 281.374 113.685 281.876C117.425 283.228 121.361 283.955 125.335 284.029C140.26 284.712 155.192 283.827 170.12 283.937C178.675 284.21 187.238 284 195.77 283.309C199.878 283.1 203.878 281.919 207.448 279.863C211.109 277.749 214.256 274.839 216.658 271.347C218.298 268.907 220.004 266.506 221.49 263.977C228.589 251.855 235.651 239.72 242.676 227.572C244.888 223.761 247.055 219.925 249.231 216.103C250.322 214.199 251.455 212.306 252.553 210.387C255.333 205.734 256.882 200.441 257.052 195.015L218.573 195.7C218.573 195.7 181.425 195.548 177.585 196.006ZM210.23 206.732C209.995 206.979 209.852 207.301 209.826 207.643C209.852 207.302 209.994 206.981 210.227 206.732H210.23Z" fill="#AFE229" /><path d="M222.301 183.405C222.344 182.883 222.564 182.391 222.923 182.012C222.564 182.392 222.345 182.883 222.301 183.405Z" fill="#771BFF" /><path d="M84.064 265.871L106.522 224.583C106.522 224.583 109.077 219.646 111.944 214.16C108.278 212.167 104.697 210.009 101.106 207.89C90.8811 201.864 80.2574 196.524 70.2604 190.104C67.5454 188.465 65.1151 186.39 63.0657 183.962C59.8708 179.971 59.039 175.215 58.7899 170.309C58.1723 158.158 58.7566 146.007 58.5467 133.856C58.4471 128.071 58.5467 122.284 58.6192 116.495C58.74 106.926 63.1488 100.076 71.2343 95.3177C79.435 90.4908 87.6297 85.6559 95.8184 80.8127C102.319 76.9892 108.831 73.1842 115.353 69.3982C116.85 68.5354 118.455 67.8611 120.018 67.1198C128.049 63.3014 135.343 65.7104 142.45 69.6459C142.903 69.8965 143.327 70.1883 143.766 70.4617C147.387 72.2222 150.914 74.1687 154.336 76.2939C163.715 81.5766 173.077 86.8927 182.42 92.2422C185.234 93.8875 187.946 95.7045 190.54 97.6828C196.267 101.958 198.041 108.078 198.408 114.846C198.861 123.286 198.597 131.739 198.559 140.187C198.529 148.48 198.681 156.767 198.589 165.063C216.038 164.986 235.733 165.063 235.733 165.063L257.078 164.685C256.996 156.015 256.879 147.345 256.877 138.674C256.877 123.121 257.311 107.56 256.412 92.0145C255.692 79.5414 252.4 68.2605 241.869 60.3487C237.1 56.6894 232.116 53.3247 226.942 50.2727C209.77 40.3717 192.574 30.5133 175.352 20.6983C168.909 17.0378 162.738 12.8775 155.927 9.88374C155.121 9.37796 154.336 8.83925 153.511 8.37599C140.454 1.08537 127.066 -3.4075 112.365 3.56719C109.504 4.92659 106.566 6.14869 103.828 7.73743C91.8821 14.6352 79.9701 21.5948 68.0923 28.6161C53.088 37.4428 38.0963 46.2881 23.1172 55.1512C8.32022 63.8605 0.288997 76.4333 0.134988 94.0599C0.041375 104.716 -0.103625 115.372 0.121349 126.025C0.592436 148.402 -0.395015 170.794 0.820449 193.159C1.31116 202.195 2.87085 210.957 8.75642 218.326C12.5268 222.811 16.997 226.648 21.9921 229.689C40.363 241.582 59.8769 251.487 78.6675 262.648C80.4683 263.721 82.2672 264.796 84.064 265.871Z" fill="#771BFF" />`,
                data: `<h2>Title of the document</h2><p>The content of the document.&nbsp;</p><figure class="image image_resized image-style-block-align-right" style="width:26.32%;"><img style="aspect-ratio:1044/380;" src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/ckeditor-logo.png" width="1044" height="380"><figcaption>A caption of the image.</figcaption></figure>`
            },
            {
                title: 'MLH banner',
                description: 'Banner template',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310.59 130.78"><defs><style>.cls-1{fill:#242425;}.cls-2{fill:#e73427;}.cls-3{fill:#1d539f;}.cls-4{fill:#f8b92a;}</style></defs><title>mlh-logo-color-dark</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="mlh-logo-color-dark"><g id="Major_League_Hacking" data-name="Major League Hacking"><path class="cls-1" d="M15.65,114.54a2.79,2.79,0,0,1,1.68,2.51v13.22a.45.45,0,0,1-.45.44H13.62a.39.39,0,0,1-.3-.12.47.47,0,0,1-.12-.32v-12H10.57v12a.45.45,0,0,1-.12.31.34.34,0,0,1-.3.13h-3a.44.44,0,0,1-.44-.44h0v-12H4.13v12a.39.39,0,0,1-.33.44H.45A.4.4,0,0,1,0,130.4V114.76a.39.39,0,0,1,.33-.44H14.57A2.52,2.52,0,0,1,15.65,114.54Z"/><path class="cls-1" d="M32,114.32A2.75,2.75,0,0,1,34.55,116a2.56,2.56,0,0,1,.23,1.06v13.22a.42.42,0,0,1-.42.44H31.08a.45.45,0,0,1-.45-.44h0v-4.2a.44.44,0,0,0-.11-.31.38.38,0,0,0-.31-.13H25.57a.45.45,0,0,0-.45.44h0v4.2a.38.38,0,0,1-.32.44H21.45a.38.38,0,0,1-.45-.32V117.06a2.75,2.75,0,0,1,.21-1.06,2.6,2.6,0,0,1,.59-.91,2.91,2.91,0,0,1,.91-.59,2.58,2.58,0,0,1,1.06-.22Zm-1.41,7.81V118h-5.5v4.12Z"/><path class="cls-1" d="M49.52,114.45a.37.37,0,0,1,.13.31V128a2.58,2.58,0,0,1-.22,1.06,3,3,0,0,1-.59.91,2.47,2.47,0,0,1-.9.59,2.8,2.8,0,0,1-1.07.21h-7a2.8,2.8,0,0,1-1.07-.21A2.74,2.74,0,0,1,37.12,128v-5a.4.4,0,0,1,.33-.45H40.8a.41.41,0,0,1,.45.33v3.47a.41.41,0,0,0,.12.31.46.46,0,0,0,.32.11h3.4a.44.44,0,0,0,.31-.11.38.38,0,0,0,.13-.31V114.76a.45.45,0,0,1,.12-.31.37.37,0,0,1,.31-.13h3.26A.39.39,0,0,1,49.52,114.45Z"/><path class="cls-1" d="M64.35,114.32a2.58,2.58,0,0,1,1.06.22A2.64,2.64,0,0,1,66.86,116a2.56,2.56,0,0,1,.23,1.06v10.89a2.64,2.64,0,0,1-.23,1.07,2.78,2.78,0,0,1-.58.9,2.51,2.51,0,0,1-.91.59,2.54,2.54,0,0,1-1.06.21H56.05A2.61,2.61,0,0,1,55,130.5a2.71,2.71,0,0,1-1.68-2.5V117.11a2.8,2.8,0,0,1,.21-1.07,2.45,2.45,0,0,1,.58-.9,2.91,2.91,0,0,1,.91-.59,2.55,2.55,0,0,1,1.06-.22Zm-1.41,4h-5.5v8.44H63Z"/><path class="cls-1" d="M85.06,130.35a.22.22,0,0,1,0,.27.27.27,0,0,1-.25.11H81.09a.7.7,0,0,1-.37-.11.75.75,0,0,1-.29-.27L78,125.9a.17.17,0,0,0-.17-.09H75a.1.1,0,0,0-.12.08,0,0,0,0,0,0,0v4.36a.38.38,0,0,1-.34.43H71.21a.39.39,0,0,1-.44-.32.24.24,0,0,1,0-.12V114.76a.38.38,0,0,1,.32-.44H81.81a2.62,2.62,0,0,1,1.06.22A2.78,2.78,0,0,1,84.32,116a2.58,2.58,0,0,1,.22,1.06v6.16a2.66,2.66,0,0,1-.53,1.61,2.58,2.58,0,0,1-1.35,1h-.07c-.11,0-.14.08-.08.14v0ZM80.4,118.14H74.75v4H80.4Z"/><path class="cls-1" d="M107.12,126.74a.39.39,0,0,1,.31.12.47.47,0,0,1,.12.32v3.1a.45.45,0,0,1-.12.31.37.37,0,0,1-.31.13H97a.4.4,0,0,1-.45-.32V114.76a.39.39,0,0,1,.33-.44h3.35a.39.39,0,0,1,.44.33.2.2,0,0,1,0,.11v11.56a.4.4,0,0,0,.13.31.47.47,0,0,0,.32.12Z"/><path class="cls-1" d="M122.28,114.45a.4.4,0,0,1,.13.31v2.95a.37.37,0,0,1-.13.31.45.45,0,0,1-.31.12h-7.86a.09.09,0,0,0-.11.08s0,0,0,0v2.55c0,.06,0,.09.11.09h6.7a.37.37,0,0,1,.3.13.45.45,0,0,1,.12.31v2.35a.45.45,0,0,1-.12.31.37.37,0,0,1-.3.13h-6.7a.1.1,0,0,0-.11.08,0,0,0,0,0,0,0v2.53a.09.09,0,0,0,.07.12H122a.44.44,0,0,1,.44.43v3a.43.43,0,0,1-.43.44H110.32a.4.4,0,0,1-.45-.32V114.76a.45.45,0,0,1,.45-.44H122A.42.42,0,0,1,122.28,114.45Z"/><path class="cls-1" d="M137.15,114.32a2.6,2.6,0,0,1,1.07.22,2.69,2.69,0,0,1,1.46,1.45,2.55,2.55,0,0,1,.22,1.06v13.22a.42.42,0,0,1-.42.44h-3.31a.44.44,0,0,1-.44-.44h0v-4.2a.45.45,0,0,0-.12-.31.37.37,0,0,0-.31-.13h-4.57a.45.45,0,0,0-.45.44h0v4.2a.39.39,0,0,1-.33.44H126.6a.38.38,0,0,1-.44-.32.24.24,0,0,1,0-.12V117.06a2.75,2.75,0,0,1,.21-1.06,2.6,2.6,0,0,1,.59-.91,2.91,2.91,0,0,1,.91-.59,2.55,2.55,0,0,1,1.06-.22Zm-1.4,7.81V118h-5.51v4.12Z"/><path class="cls-1" d="M157.2,121.9a.41.41,0,0,1,.12.32V128a2.58,2.58,0,0,1-.22,1.06,3.21,3.21,0,0,1-.58.91,2.6,2.6,0,0,1-.91.59,2.78,2.78,0,0,1-1.06.21h-8.3a2.73,2.73,0,0,1-2.74-2.74v-10.9a2.78,2.78,0,0,1,.21-1.06,2.44,2.44,0,0,1,.58-.91,3,3,0,0,1,.9-.59,2.81,2.81,0,0,1,1.07-.22H156a.45.45,0,0,1,.45.45h0v3.09a.45.45,0,0,1-.45.45h-7.85a.47.47,0,0,0-.32.12.44.44,0,0,0-.13.31v7.59a.42.42,0,0,0,.13.3.43.43,0,0,0,.32.12h4.64a.4.4,0,0,0,.42-.38v-4.14a.42.42,0,0,1,.42-.44h3.28A.43.43,0,0,1,157.2,121.9Z"/><path class="cls-1" d="M174.49,114.45a.44.44,0,0,1,.13.31V128a2.59,2.59,0,0,1-.23,1.06,3,3,0,0,1-.58.91,2.6,2.6,0,0,1-.91.59,2.8,2.8,0,0,1-1.07.21h-8.3a2.78,2.78,0,0,1-1.06-.21A2.75,2.75,0,0,1,161,129.1a2.8,2.8,0,0,1-.21-1.07V114.76a.39.39,0,0,1,.33-.44h3.35a.39.39,0,0,1,.44.33.2.2,0,0,1,0,.11v11.56a.4.4,0,0,0,.13.31.47.47,0,0,0,.32.12H170a.42.42,0,0,0,.3-.12.37.37,0,0,0,.12-.31V114.76a.45.45,0,0,1,.45-.44h3.26A.39.39,0,0,1,174.49,114.45Z"/><path class="cls-1" d="M190.73,114.45a.44.44,0,0,1,.13.31v2.95a.4.4,0,0,1-.13.31.47.47,0,0,1-.32.12h-7.85a.1.1,0,0,0-.12.08v2.59c0,.06,0,.09.12.09h6.7a.39.39,0,0,1,.3.13.45.45,0,0,1,.12.31v2.35a.45.45,0,0,1-.12.31.39.39,0,0,1-.3.13h-6.7a.11.11,0,0,0-.12.08v2.57a.1.1,0,0,0,.08.12h7.89a.45.45,0,0,1,.45.43v3a.44.44,0,0,1-.43.44H178.77a.39.39,0,0,1-.45-.32.24.24,0,0,1,0-.12V114.76a.45.45,0,0,1,.45-.44h11.64A.42.42,0,0,1,190.73,114.45Z"/><path class="cls-1" d="M215.88,114.32a.42.42,0,0,1,.44.42v15.54a.43.43,0,0,1-.43.44h-3.27a.45.45,0,0,1-.45-.44h0v-5.45a.4.4,0,0,0-.38-.42h-4.67a.45.45,0,0,0-.32.12.37.37,0,0,0-.13.31v5.45a.39.39,0,0,1-.33.44.21.21,0,0,1-.11,0H203a.39.39,0,0,1-.44-.33.2.2,0,0,1,0-.11V114.76a.39.39,0,0,1,.33-.44h3.35a.39.39,0,0,1,.44.33.2.2,0,0,1,0,.11V120a.39.39,0,0,0,.33.44h4.75a.39.39,0,0,0,.31-.12.47.47,0,0,0,.12-.32v-5.25a.45.45,0,0,1,.45-.44h3.25Z"/><path class="cls-1" d="M231.06,114.32a2.6,2.6,0,0,1,1.07.22,2.69,2.69,0,0,1,1.46,1.45,2.55,2.55,0,0,1,.22,1.06v13.22a.42.42,0,0,1-.42.44h-3.28a.44.44,0,0,1-.44-.44v-4.2a.45.45,0,0,0-.12-.31.37.37,0,0,0-.31-.13h-4.65a.44.44,0,0,0-.44.44h0v4.2a.39.39,0,0,1-.33.44h-3.35a.39.39,0,0,1-.45-.32V117.06a2.75,2.75,0,0,1,.21-1.06,2.6,2.6,0,0,1,.59-.91,3,3,0,0,1,.91-.59,2.62,2.62,0,0,1,1.06-.22Zm-1.4,7.81V118h-5.51v4.12Z"/><path class="cls-1" d="M241.68,118.42a.39.39,0,0,0-.12.31v7.59a.39.39,0,0,0,.12.31.47.47,0,0,0,.32.12h7.53a.42.42,0,0,1,.44.42v3.12a.42.42,0,0,1-.42.44h-9.37a2.71,2.71,0,0,1-1.06-.21,2.6,2.6,0,0,1-.91-.59,2.92,2.92,0,0,1-.79-2V117.07a2.71,2.71,0,0,1,.21-1.06,2.44,2.44,0,0,1,.58-.91,2.91,2.91,0,0,1,.91-.59,2.55,2.55,0,0,1,1.06-.22h9.35a.44.44,0,0,1,.44.43v3.11a.44.44,0,0,1-.42.45H242A.45.45,0,0,0,241.68,118.42Z"/><path class="cls-1" d="M263,121.23a.12.12,0,0,0,0,.16l5.44,9a.22.22,0,0,1,0,.27.27.27,0,0,1-.25.11h-3.9a.7.7,0,0,1-.37-.11.66.66,0,0,1-.28-.27L260.13,124c0-.09-.09-.09-.12,0l-1.94,2.13a.9.9,0,0,0-.2.34,1.1,1.1,0,0,0-.08.4v3.47a.41.41,0,0,1-.33.45h-3.28a.39.39,0,0,1-.44-.33.24.24,0,0,1,0-.12V114.76a.39.39,0,0,1,.33-.44h3.35a.39.39,0,0,1,.44.33.2.2,0,0,1,0,.11v7l6.05-7.08a1,1,0,0,1,.26-.27.93.93,0,0,1,.4-.09h3.89c.13,0,.2,0,.23.09s0,.15-.08.24Z"/><path class="cls-1" d="M275.65,130.28a.38.38,0,0,1-.32.44H272a.39.39,0,0,1-.45-.32V114.76a.39.39,0,0,1,.33-.44h3.35a.39.39,0,0,1,.44.33.2.2,0,0,1,0,.11Z"/><path class="cls-1" d="M291.4,114.54a2.76,2.76,0,0,1,1.46,1.45,2.57,2.57,0,0,1,.21,1.06v13.22a.42.42,0,0,1-.42.44h-3.24a.39.39,0,0,1-.31-.12.47.47,0,0,1-.12-.32V118.72a.37.37,0,0,0-.13-.31.45.45,0,0,0-.31-.12H283.9a.47.47,0,0,0-.32.12.4.4,0,0,0-.13.31v11.56a.39.39,0,0,1-.33.44h-3.35a.39.39,0,0,1-.44-.32.24.24,0,0,1,0-.12V114.76a.39.39,0,0,1,.33-.44h10.71A2.45,2.45,0,0,1,291.4,114.54Z"/><path class="cls-1" d="M310.41,121.9a.42.42,0,0,1,.13.32V128a2.59,2.59,0,0,1-.23,1.06,2.82,2.82,0,0,1-.58.91,2.51,2.51,0,0,1-.91.59,2.71,2.71,0,0,1-1.06.21h-8.3a2.78,2.78,0,0,1-1.06-.21,2.74,2.74,0,0,1-1.64-2.56V117.11A2.8,2.8,0,0,1,297,116a2.45,2.45,0,0,1,.58-.9,2.91,2.91,0,0,1,.91-.59,2.55,2.55,0,0,1,1.06-.22h9.68a.44.44,0,0,1,.44.44v3.1a.44.44,0,0,1-.44.44h-7.86a.45.45,0,0,0-.31.12.37.37,0,0,0-.13.31v7.59a.37.37,0,0,0,.13.31.4.4,0,0,0,.31.11h4.59a.4.4,0,0,0,.42-.38v-4.14a.42.42,0,0,1,.42-.44h3.28A.43.43,0,0,1,310.41,121.9Z"/></g><g id="M"><path class="cls-2" d="M98.85,1.41A17.32,17.32,0,0,1,108,10.57a16.51,16.51,0,0,1,1.41,6.68v86.06a2.78,2.78,0,0,1-2.75,2.8H86a2.43,2.43,0,0,1-1.92-.82,2.82,2.82,0,0,1-.74-2V25.12H66.79v78.22a2.87,2.87,0,0,1-.74,2,2.52,2.52,0,0,1-1.93.82H45.47a2.78,2.78,0,0,1-2.82-2.74V25.12H26.07v78.22a2.49,2.49,0,0,1-2.82,2.81H2.82A2.49,2.49,0,0,1,0,103.34V2.81A2.49,2.49,0,0,1,2.82,0H92.11A16.46,16.46,0,0,1,98.85,1.41Z"/></g><g id="L"><path class="cls-3" d="M199.19,80.38a2.69,2.69,0,0,1,2,.83,2.89,2.89,0,0,1,.78,2.05v20a2.83,2.83,0,0,1-.78,2,2.67,2.67,0,0,1-2,.84h-70.5c-2,0-3-1-3-2.88V2.88c0-1.92,1-2.88,3-2.88h21.64c2,0,3,1,3,2.88V77.65a2.49,2.49,0,0,0,.91,2,3.09,3.09,0,0,0,2.11.77Z"/></g><g id="H"><path class="cls-4" d="M307.54,0a2.94,2.94,0,0,1,2.14.84,2.76,2.76,0,0,1,.91,2.05V103.57a2.76,2.76,0,0,1-.91,2.05,2.94,2.94,0,0,1-2.14.84H285.62a2.93,2.93,0,0,1-2.13-.84,2.69,2.69,0,0,1-.91-2.05V68.44a2.63,2.63,0,0,0-.79-2,2.82,2.82,0,0,0-2.05-.76H249a3.09,3.09,0,0,0-2.13.76,2.5,2.5,0,0,0-.91,2v35.13c0,1.92-1,2.89-3,2.89H221.2c-2,0-3-1-3-2.89V2.89c0-1.93,1-2.89,3-2.89H243c2,0,3,1,3,2.89V37c0,1.92,1,2.88,3,2.88h30.81a2.74,2.74,0,0,0,2.06-.83,2.93,2.93,0,0,0,.79-2V2.89a2.71,2.71,0,0,1,.9-2.05A2.92,2.92,0,0,1,285.62,0Z"/></g></g></g></g></svg>`,
                data: `<figure class="image image-style-align-left image_resized" style="width:26.32%;"><img src="https://organize.mlh.io/assets/logos/mlh-logo-color-8855d2cdd90cb6b4ecc3d5bde7f7f417d817203c505a32ce4abdcb40387dc465.svg"><figcaption>A caption of the image.</figcaption></figure><p>Major League Hacking banner</p>`
            }

        ]
    }
};

const editorElement = document.querySelector<HTMLElement>('#editor');
if (!editorElement) {
    throw new Error('Editor element not found in the document.');
}

let inspectorEnabled = false;

ClassicEditor.create(editorElement, editorConfig).then(editor => {
    window.editor = editor; // Make the editor instance available globally for debugging.

    // Set up inspector toggle functionality
    const toggleButton = document.getElementById('inspector-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (inspectorEnabled) {
                CKEditorInspector.destroy()
                inspectorEnabled = false;
                toggleButton.textContent = 'Show Inspector';
                toggleButton.classList.remove('active');
            } else {
                CKEditorInspector.attach({ 'editor': window.editor });
                inspectorEnabled = true;
                toggleButton.textContent = 'Hide Inspector';
                toggleButton.classList.add('active');
            }
        });
    }
});

declare global {
    interface Window {
        editor: ClassicEditor;
    }
}

function MentionCustomization(editor: Editor) {
    // The upcast converter will convert view <a class="mention" href="" data-user-id="">
    // elements to the model 'mention' text attribute.
    editor.conversion.for('upcast').elementToAttribute({
        view: {
            name: 'a',
            classes: 'mention',
            attributes: {
                href: true,
            }
        },
        model: {
            key: 'mention',
            value: (viewItem: ModelElement) => {
                // The mention feature expects that the mention attribute value
                // in the model is a plain object with a set of additional attributes.
                // In order to create a proper object use the toMentionAttribute() helper method:
                const mentionAttribute = editor.plugins.get('Mention').toMentionAttribute(viewItem, {
                    // Add any other properties that you need.
                    link: viewItem.getAttribute('href'),
                });

                return mentionAttribute;
            }
        },
        converterPriority: 'high'
    });

    // Downcast the model 'mention' text attribute to a view <a> element.
    editor.conversion.for('downcast').attributeToElement({
        model: 'mention',
        view: (modelAttributeValue, { writer }) => {
            // Do not convert empty attributes (lack of value means no mention).
            if (!modelAttributeValue) {
                return;
            }

            return writer.createAttributeElement('a', {
                class: 'mention',
                'href': `https://github.com/${modelAttributeValue.text.substring(1)}`,
            }, {
                // Make mention attribute to be wrapped by other attribute elements.
                priority: 20,
                // Prevent merging mentions together.
                id: modelAttributeValue.uid
            });
        },
        converterPriority: 'high'
    });
}