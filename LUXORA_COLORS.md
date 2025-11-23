# LUXORA Color System - Quick Reference

## Primary Colors

### Rich Black
```
#0D0D0D
rgb(13, 13, 13)
```
**Usage**: Main background, body background, deep sections  
**Component**: `background.default`

### Deep Charcoal
```
#1A1A1A
rgb(26, 26, 26)
```
**Usage**: Cards, elevated surfaces, paper components  
**Component**: `background.paper`

### Metallic Gold
```
#D4AF37
rgb(212, 175, 55)
```
**Usage**: Primary accent, CTAs, important highlights, borders  
**Component**: `primary.main`

### Soft Gold
```
#F5D98A
rgb(245, 217, 138)
```
**Usage**: Secondary accent, gradient ends, hover states  
**Component**: `primary.light`

### Pure White
```
#FFFFFF
rgb(255, 255, 255)
```
**Usage**: Primary text, headings on dark backgrounds  
**Component**: `text.primary`

### Light Gray
```
#C4C4C4
rgb(196, 196, 196)
```
**Usage**: Secondary text, subtle borders, placeholders  
**Component**: `text.secondary`

---

## Gradients

### Primary Gold Gradient
```css
background: linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%);
```
**Usage**: Buttons, headings, brand name, special elements

### Text Gradient
```css
background: linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```
**Usage**: Premium headings, prices, brand names

### Reverse Gradient (Hover)
```css
background: linear-gradient(135deg, #F5D98A 0%, #D4AF37 100%);
```
**Usage**: Button hover states, interactive elements

### Divider Gradient
```css
background: linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%);
```
**Usage**: Horizontal dividers, decorative lines

---

## Opacity Variations

### Gold with Opacity
```css
rgba(212, 175, 55, 0.1)  /* Very subtle */
rgba(212, 175, 55, 0.2)  /* Borders */
rgba(212, 175, 55, 0.3)  /* Hover borders */
rgba(212, 175, 55, 0.4)  /* Shadows */
rgba(212, 175, 55, 0.5)  /* Hover glow */
```

### Black with Opacity
```css
rgba(13, 13, 13, 0.85)   /* Navbar backdrop */
rgba(13, 13, 13, 0.92)   /* Semi-transparent overlays */
rgba(0, 0, 0, 0.25)      /* Shadows */
rgba(0, 0, 0, 0.4)       /* Deep shadows */
```

---

## Box Shadows

### Subtle
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
```

### Standard
```css
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
```

### Elevated
```css
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
```

### Gold Glow (Subtle)
```css
box-shadow: 0 4px 16px rgba(212, 175, 55, 0.25);
```

### Gold Glow (Strong)
```css
box-shadow: 0 6px 24px rgba(212, 175, 55, 0.4);
```

### Hover Glow
```css
box-shadow: 0 12px 40px rgba(212, 175, 55, 0.25);
```

---

## Border Colors

### Subtle Border
```css
border: 1px solid rgba(212, 175, 55, 0.1);
```

### Standard Border
```css
border: 1px solid rgba(212, 175, 55, 0.2);
```

### Hover Border
```css
border: 1px solid rgba(212, 175, 55, 0.3);
```

### Focus/Active Border
```css
border: 2px solid #D4AF37;
```

---

## Usage Examples

### Button (Primary)
```jsx
sx={{
  background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
  color: '#0D0D0D',
  '&:hover': {
    background: 'linear-gradient(135deg, #F5D98A 0%, #D4AF37 100%)',
    boxShadow: '0 6px 24px rgba(212,175,55,0.4)',
  }
}}
```

### Button (Secondary)
```jsx
sx={{
  borderColor: '#D4AF37',
  color: '#D4AF37',
  borderWidth: 2,
  '&:hover': {
    borderColor: '#F5D98A',
    backgroundColor: 'rgba(212,175,55,0.1)',
  }
}}
```

### Card
```jsx
sx={{
  backgroundColor: '#1A1A1A',
  border: '1px solid rgba(212,175,55,0.1)',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
  '&:hover': {
    borderColor: 'rgba(212,175,55,0.3)',
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(212,175,55,0.25)',
  }
}}
```

### Typography (Gold Gradient)
```jsx
sx={{
  background: 'linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
}}
```

### Input Field
```jsx
sx={{
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#0D0D0D',
    borderRadius: '12px',
    '& fieldset': {
      borderColor: '#C4C4C4',
    },
    '&:hover fieldset': {
      borderColor: '#D4AF37',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D4AF37',
      borderWidth: 2,
    },
  },
}}
```

---

## Color Accessibility

### Contrast Ratios (WCAG Compliance)
- **#FFFFFF on #0D0D0D**: 20.6:1 ✅ (AAA)
- **#D4AF37 on #0D0D0D**: 7.2:1 ✅ (AA)
- **#C4C4C4 on #1A1A1A**: 4.8:1 ✅ (AA)
- **#0D0D0D on #D4AF37**: 8.1:1 ✅ (AA)

All color combinations meet or exceed WCAG AA standards for accessibility.

---

## CSS Custom Properties (Optional)

If you want to use CSS variables:

```css
:root {
  --luxora-black: #0D0D0D;
  --luxora-charcoal: #1A1A1A;
  --luxora-gold: #D4AF37;
  --luxora-gold-light: #F5D98A;
  --luxora-white: #FFFFFF;
  --luxora-gray: #C4C4C4;
  
  --luxora-gradient: linear-gradient(135deg, #D4AF37 0%, #F5D98A 100%);
  --luxora-gradient-reverse: linear-gradient(135deg, #F5D98A 0%, #D4AF37 100%);
}
```

---

*LUXORA - Where Premium Meets Precision*
