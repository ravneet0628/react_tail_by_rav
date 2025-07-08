import type { Meta, StoryObj } from '@storybook/react';
import { LikeButton } from './LikeButton';

const meta: Meta<typeof LikeButton> = {
  title: 'Components/LikeButton',
  component: LikeButton,
  parameters: {
    docs: {
      description: {
        component: 'A like button component demonstrating React 19\'s useActionState hook for simple async actions with optimistic UI updates.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'ghost'],
    },
    onLikeChange: { action: 'like-changed' },
  },
};

export default meta;
type Story = StoryObj<typeof LikeButton>;

export const Default: Story = {
  args: {
    itemId: 'post-1',
    initialLiked: false,
    initialCount: 42,
  },
};

export const Liked: Story = {
  args: {
    itemId: 'post-2',
    initialLiked: true,
    initialCount: 128,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <LikeButton itemId="post-small" size="sm" initialCount={5} />
      <LikeButton itemId="post-medium" size="md" initialCount={25} />
      <LikeButton itemId="post-large" size="lg" initialCount={100} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of the like button.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <LikeButton itemId="post-default" variant="default" initialCount={42} />
        <LikeButton itemId="post-outline" variant="outline" initialCount={42} />
        <LikeButton itemId="post-ghost" variant="ghost" initialCount={42} />
      </div>
      <div className="flex items-center gap-4">
        <LikeButton itemId="post-default-liked" variant="default" initialLiked initialCount={43} />
        <LikeButton itemId="post-outline-liked" variant="outline" initialLiked initialCount={43} />
        <LikeButton itemId="post-ghost-liked" variant="ghost" initialLiked initialCount={43} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the like button, showing both liked and unliked states.',
      },
    },
  },
};

export const WithoutCount: Story = {
  args: {
    itemId: 'post-no-count',
    showCount: false,
    initialLiked: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Like button without showing the count.',
      },
    },
  },
};

export const WithCallback: Story = {
  args: {
    itemId: 'post-callback',
    initialCount: 25,
    onLikeChange: (liked, count) => {
      console.log(`Like changed: ${liked ? 'liked' : 'unliked'}, new count: ${count}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Like button with a callback to handle like state changes.',
      },
    },
  },
}; 